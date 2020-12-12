<template>
  <div>
    <div id="map-container"></div>
  </div>
</template>
<script>
// https://travishorn.com/interactive-maps-with-vue-leaflet-5430527353c8
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import countries from '../service/geoCountries.json';
// import countriesInfo from '../service/countries.json';

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
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = L.map('map-container', {
        minZoom: 2,
        maxZoom: 7,
      }).setView([38.63, -90.23], 2);
      const southWest = L.latLng(-89.98155760646617, -180);
      const northEast = L.latLng(89.99346179538875, 180);
      const bounds = L.latLngBounds(southWest, northEast);
      map.setMaxBounds(bounds);
      this.tileLayer = L.tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
        attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: 2,
        maxZoom: 7,
        subdomains: 'abcd',
        accessToken: 'NgIHKQF7VEVamoTHhgZM7WvvcUK7jY6udBbdF1hd4cEvlRA8qQhLZN679ESuVNol',
      });
      this.tileLayer.addTo(map);

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

      map.eachLayer((layer) => {
        if (layer.feature?.geometry) {
          const center = layer.feature.id === 'RUS' ? { lat: 60.793196, lng: 92.003289 } : layer.getBounds().getCenter();
          const size = this.getMarkerSize(layer.feature.id);
          L.circle(center, {
            radius: size, color: 'red', opacity: 0.8, weight: 1, interactive: false,
          }).addTo(map);
        }
      });

      map.eachLayer((layer) => {
        if (layer.feature?.geometry) {
          layer.on('mouseover', function onMouseOver() {
            this.setStyle({
              fillColor: 'grey',
              color: 'white',
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

      map.eachLayer((layer) => {
        if (layer.feature?.geometry) {
          let tooltipPopup;
          layer.on('mouseover', (event) => {
            tooltipPopup = L.popup({ offset: L.point(0, -20), className: 'custom', closeButton: false });
            const popupContent = this.createPopupContent(
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

      // i am not using this.map in working with layers
      // because this.map contains a Proxy and it causes
      // a bug on resize in Leaflet after popup or tooltip closes
      this.map = map;
    },
    createPopupContent(countryCode, countryName) {
      let parameter = '';
      let number = 0;
      switch (this.currentParameter) {
        case 'total': {
          parameter = 'Total Confirmed';
          number = this.data.Countries[countryCode]?.timeline.Summary.Total.Confirmed;
          break;
        }
        default:
          break;
      }
      return `<h4>${countryName}</h4>${parameter}:<br>${`${number} cases` || 'No data for this country'}`;
    },
    getMarkerSize(countryCode) {
      if (!this.data.Countries[countryCode]) return 0;
      let size = 0;
      switch (this.currentParameter) {
        case 'total': {
          const num = this.data.Countries[countryCode].timeline.Summary.Total.Confirmed;
          size = num / 10;
          break;
        }
        default:
          break;
      }
      return size;
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
    background: #e93434;
  }

  .custom .leaflet-popup-content-wrapper {
      background: #e93434;
      color: #ffffff;
      border-radius: 4px;

      h4 {
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
      }
  }
</style>
