<template>
  <div>
    <div id="map-container"></div>
  </div>
</template>
<script>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-easybutton';
import countries from '../service/geoCountries.json';

export default {
  name: 'Map',
  data() {
    return {
      map: null,
      tileLayer: null,
      currentParameter: 'total',
    };
  },
  props: {
    data: Object,
    loadingState: Object,
    state: Object,
  },
  mounted() {
    this.createMap();
  },
  methods: {
    createMap() {
      const map = L.map('map-container', {
        minZoom: 2,
        maxZoom: 7,
      }).setView([38.63, 0], 2);

      const setMapBounds = () => {
        const southWest = L.latLng(-89.98155760646617, -380);
        const northEast = L.latLng(89.99346179538875, 380);
        const bounds = L.latLngBounds(southWest, northEast);
        map.setMaxBounds(bounds);
      };

      const addMapBaseLayer = () => {
        this.tileLayer = L.tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
          attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          minZoom: 2,
          maxZoom: 7,
          subdomains: 'abcd',
          accessToken: 'NgIHKQF7VEVamoTHhgZM7WvvcUK7jY6udBbdF1hd4cEvlRA8qQhLZN679ESuVNol',
        });
        this.tileLayer.addTo(map);
      };

      const findPathByState = () => {
        let path = 'Total';
        if (this.state.period === 'New' && this.state.calcType === 'Total') {
          path = 'New';
        } else if (this.state.period === 'All time' && this.state.calcType === 'Per 100k') {
          path = 'TotalPer100k';
        } else if (this.state.period === 'New' && this.state.calcType === 'Per 100k') {
          path = 'NewPer100k';
        }
        return path;
      };

      const getScaleByState = () => {
        let scale = [0, 10000, 50000, 100000, 500000, 1000000, 5000000, 10000000];
        if (this.state.period === 'New' && this.state.calcType === 'Total') {
          scale = scale.map((n) => n / 200);
        } else if (this.state.period === 'All time' && this.state.calcType === 'Per 100k') {
          scale = scale.map((n) => n / 1000);
        } else if (this.state.period === 'New' && this.state.calcType === 'Per 100k') {
          scale = scale.map((n) => n / 200000);
        }
        if (this.state.type === 'Deaths') scale = scale.map((n) => n / 44);
        if (this.state.type === 'Recovered') scale = scale.map((n) => n / 1.5);

        return scale;
      };

      const getColor = (numberOfCases, scale) => {
        const mapColors = ['grey', '#FFEDA0', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026'];
        if (numberOfCases > scale[7]) return mapColors[8];
        if (numberOfCases > scale[6]) return mapColors[7];
        if (numberOfCases > scale[5]) return mapColors[6];
        if (numberOfCases > scale[4]) return mapColors[5];
        if (numberOfCases > scale[3]) return mapColors[4];
        if (numberOfCases > scale[2]) return mapColors[3];
        if (numberOfCases > scale[1]) return mapColors[2];
        if (numberOfCases > scale[0]) return mapColors[1];
        return mapColors[0];
      };

      const getColorByCountry = (countryCode) => {
        const scale = getScaleByState();
        if (!this.data.Countries[countryCode]) return getColor(0, scale);
        const path = findPathByState();
        return getColor(
          this.data.Countries[countryCode].timeline.Summary[path][this.state.type],
          scale,
        );
      };

      const addCountryBounds = () => {
        L.geoJSON(countries, {
          style() {
            return {
              fillColor: 'transparent',
              fillOpacity: 1,
              stroke: false,
              color: 'grey',
              weight: 1,
            };
          },
        }).addTo(map);
      };

      const addMarkers = () => {
        map.eachLayer((layer) => {
          if (layer.feature?.geometry) {
            const center = layer.feature.id === 'RUS'
              ? { lat: 60.793196, lng: 92.003289 } : layer.getBounds().getCenter();
            L.circleMarker(center, {
              radius: 6,
              color: getColorByCountry(layer.feature.id),
              fillOpacity: 0.7,
              weight: 1,
              interactive: false,
            }).addTo(map);
          }
        });
      };

      const addCountryFillOnHover = () => {
        map.eachLayer((layer) => {
          const color = getColorByCountry(layer.feature?.id);
          if (layer.feature?.geometry) {
            layer.on('mouseover', function onMouseOver() {
              this.setStyle({
                fillColor: color,
                color,
              });
            });
            layer.on('mouseout', function onMouseOut() {
              this.setStyle({
                fillColor: 'transparent',
                color: 'grey',
              });
            });
          }
        });
      };

      const createPopupContent = (countryCode, countryName) => {
        const path = findPathByState();
        const number = this.data.Countries[countryCode]?.timeline.Summary[path][this.state.type]
                      || 0;
        const casesText = number ? `${Math.round(number)} cases` : 'No data for this country';
        return `<h4>${countryName}</h4>${this.state.period} ${this.state.type} ${this.state.calcType}:<br>${casesText}`;
      };

      const addPopupOnHover = () => {
        map.eachLayer((layer) => {
          if (layer.feature?.geometry) {
            let tooltipPopup;
            layer.on('mouseover', (event) => {
              tooltipPopup = L.popup({ offset: L.point(0, -10), className: 'custom', closeButton: false });
              const popupContent = createPopupContent(
                layer.feature.id,
                layer.feature.properties.name,
              );
              tooltipPopup.setContent(popupContent);
              tooltipPopup.setLatLng(event.latlng);
              tooltipPopup.openOn(map);
            });
            layer.on('mousemove', (event) => {
              tooltipPopup.setLatLng(event.latlng);
            });
            layer.on('mouseout', () => {
              map.closePopup(tooltipPopup);
            });
          }
        });
      };

      const addLegend = () => {
        const legend = L.control({ position: 'topleft' });

        legend.onAdd = function createLegend() {
          const div = L.DomUtil.create('div', 'info legend');
          const scale = getScaleByState();

          for (let i = 0; i < scale.length; i += 1) {
            div.innerHTML
            += `<i style="background:${getColor(scale[i] + 1, scale)}"></i> ${
                Math.round(scale[i])}${scale[i + 1] ? '+<br>' : '+'}`;
          }
          return div;
        };

        let isLegendVisible = false;

        L.easyButton('<span class="legend-toggle">&equiv;</span>', () => {
          isLegendVisible = !isLegendVisible;
          if (isLegendVisible) {
            legend.addTo(map);
          } else {
            legend.remove();
          }
        }).addTo(map);
      };

      setMapBounds();
      addMapBaseLayer();
      addCountryBounds();
      addMarkers();
      addCountryFillOnHover();
      addPopupOnHover();
      addLegend();

      // i am not using this.map in working with layers
      // because this.map contains a Proxy and it causes
      // a bug on resize in Leaflet after popup or tooltip closes
      this.map = map;
    },

  },
};
</script>

<style lang="scss">
  #map-container {
    height: 40rem;
    width: 100%;
  }
  .leaflet-container {
    background: $color-gray;
    outline: 0;
  }

  .leaflet-pane > svg path.leaflet-interactive {
     transition: fill .4s ease, stroke .4s ease;
  }

  .custom .leaflet-popup-tip {
      background: #7c7c7c;
  }

  .custom .leaflet-popup-content-wrapper {
      background: #7c7c7c;
      color: #ffffff;
      border-radius: 4px;

      h4 {
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
      }
  }

  .easy-button-button {
    width: 30px;
    border: none;
    height: 30px;
    border-radius: 2px;
  }

  .legend-toggle {
    font-size: 1.5em;
  }

  .legend {
      line-height: 18px;
      color: #555;
      background: #7c7c7c;
      margin-left: 0.5rem;
      padding: 1rem;
      border-radius: 4px;
      color: $color-white;
  }
  .legend i {
      width: 18px;
      height: 18px;
      float: left;
      margin-right: 8px;
      opacity: 1;
  }
</style>
