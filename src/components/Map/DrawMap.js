import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-easybutton';
import countries from '../../service/geoCountries.json';

const SOUTH_WEST_DISPLAY_BOUND = -89.98155760646617;
const NORTH_EAST_DISPLAY_BOUND = 89.99346179538875;
const MAP_CENTER = [38.63, 0];
const MAP_ZOOM_CENTER = 2;
const BOUND_SHIFT = 380;
const JAWG_TOKEN = 'NgIHKQF7VEVamoTHhgZM7WvvcUK7jY6udBbdF1hd4cEvlRA8qQhLZN679ESuVNol';
const NEW_TOTAL_SCALE_COEF = 200;
const ALL_TIME_100K_SCALE_COEF = 1e3;
const NEW_100K_SCALE_COEF = 2e5;
const DEATHS_SCALE_COEF = 44;
const RECOVERED_SCALE_COEF = 1.5;

export class DrawMap {
  constructor(state, data, onCountryClick) {
    this.map = undefined;
    this.state = state;
    this.data = data;
    this.markers = [];
    this.scale = [0, 1e4, 5e4, 1e5, 5e5, 1e6, 5e6, 1e7];
    this.isLegendVisible = false;
    this.mapModeMarkers = true;
    this.onCountryClick = onCountryClick;
  }

  init() {
    if (!this.map) {
      this.map = L.map('map-container', {
        worldCopyJump: true,
        minZoom: 2,
        maxZoom: 7,
      }).setView(MAP_CENTER, MAP_ZOOM_CENTER);
    }
    this.setMapBounds();
    this.addMapBaseLayer();
    this.addCountryBounds();
    this.getScaleByState();
    this.addMarkers();
    this.addCountryFillOnHover();
    this.addPopupOnHover();
    this.addLegend();
    this.handleMapClicks();
    return this.map;
  }

  update(state) {
    this.state = state;
    this.isLegendVisible = false;
    this.legend.remove();
    this.getScaleByState();
    this.replaceMarkers();
  }

  redraw() {
    this.map.invalidateSize(true);
  }

  setMapBounds() {
    const southWest = L.latLng(SOUTH_WEST_DISPLAY_BOUND, -BOUND_SHIFT);
    const northEast = L.latLng(NORTH_EAST_DISPLAY_BOUND, BOUND_SHIFT);
    const bounds = L.latLngBounds(southWest, northEast);
    this.map.setMaxBounds(bounds);
  }

  addMapBaseLayer() {
    this.tileLayer = L.tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
      attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      minZoom: 2,
      maxZoom: 7,
      subdomains: 'abcd',
      accessToken: JAWG_TOKEN,
    });
    this.tileLayer.addTo(this.map);
  }

  findPathByState() {
    let path = 'Total';
    if (this.state.period === 'New' && this.state.calcType === 'Total') {
      path = 'New';
    } else if (this.state.period === 'All time' && this.state.calcType === 'Per 100k') {
      path = 'TotalPer100k';
    } else if (this.state.period === 'New' && this.state.calcType === 'Per 100k') {
      path = 'NewPer100k';
    }
    return path;
  }

  getScaleByState() {
    let scale = [0, 1e4, 5e4, 1e5, 5e5, 1e6, 5e6, 1e7];
    if (this.state.period === 'New' && this.state.calcType === 'Total') {
      scale = scale.map((n) => n / NEW_TOTAL_SCALE_COEF);
    } else if (this.state.period === 'All time' && this.state.calcType === 'Per 100k') {
      scale = scale.map((n) => n / ALL_TIME_100K_SCALE_COEF);
    } else if (this.state.period === 'New' && this.state.calcType === 'Per 100k') {
      scale = scale.map((n) => n / NEW_100K_SCALE_COEF);
    }
    if (this.state.type === 'Deaths') scale = scale.map((n) => n / DEATHS_SCALE_COEF);
    if (this.state.type === 'Recovered') scale = scale.map((n) => n / RECOVERED_SCALE_COEF);

    this.scale = scale;
  }

  static getColor(numberOfCases, scale) {
    const mapColors = ['grey', '#FFEDA0', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026'];
    if (numberOfCases > scale[7]) return mapColors[8];
    if (numberOfCases > scale[6]) return mapColors[7];
    if (numberOfCases > scale[5]) return mapColors[6];
    if (numberOfCases > scale[4]) return mapColors[5];
    if (numberOfCases > scale[3]) return mapColors[4];
    if (numberOfCases > scale[2]) return mapColors[3];
    if (numberOfCases > scale[1]) return mapColors[2];
    if (numberOfCases >= scale[0]) return mapColors[1];
    return mapColors[0];
  }

  getColorByCountry(countryCode) {
    if (!this.data.Countries[countryCode]) return DrawMap.getColor(undefined, this.scale);
    const path = this.findPathByState();
    const rawNum = this.data.Countries[countryCode].timeline.Summary[path][this.state.type];
    const number = DrawMap.getCasesNumber(rawNum);
    return DrawMap.getColor(number, this.scale);
  }

  addCountryBounds() {
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
    }).addTo(this.map);
  }

  addMarkers = () => {
    if (this.mapModeMarkers) {
      this.map.eachLayer((layer) => {
        if (layer.feature?.geometry) {
          layer.setStyle({
            fillColor: 'transparent',
            color: 'grey',
          });
        }
      });
      this.map.eachLayer((layer) => {
        if (layer.feature?.geometry) {
          const center = layer.feature.id === 'RUS'
            ? { lat: 60.793196, lng: 92.003289 } : layer.getBounds().getCenter();
          const marker = L.circleMarker(center, {
            radius: 6,
            color: this.getColorByCountry(layer.feature.id),
            fillOpacity: 0.7,
            weight: 1,
            interactive: false,
          }).addTo(this.map);
          this.markers.push(marker);
        }
      });
    } else {
      this.map.eachLayer((layer) => {
        if (layer.feature?.geometry) {
          const color = this.getColorByCountry(layer.feature?.id);
          layer.setStyle({
            fillColor: color,
            color,
          });
        }
      });
    }
  };

  replaceMarkers() {
    this.markers.forEach((marker) => this.map.removeLayer(marker));
    this.markers = [];
    this.addMarkers();
  }

  addCountryFillOnHover = () => {
    const context = this;

    this.map.eachLayer((layer) => {
      if (layer.feature?.geometry) {
        layer.on('mouseover', function onMouseOver() {
          if (context.mapModeMarkers) {
            const color = context.getColorByCountry(layer.feature?.id);
            this.setStyle({
              fillColor: color,
              color,
            });
          }
        });
        layer.on('mouseout', function onMouseOut() {
          if (context.mapModeMarkers) {
            this.setStyle({
              fillColor: 'transparent',
              color: 'grey',
            });
          }
        });
      }
    });
  };

  createPopupContent(countryCode, countryName) {
    const path = this.findPathByState();
    const number = this.data.Countries[countryCode]?.timeline.Summary[path][this.state.type];
    const casesText = (number !== undefined)
      ? `${number > 1 ? Math.round(number) : Math.round(number * 100) / 100} cases`
      : 'No data for this country';
    return `<h4>${countryName}</h4>${this.state.period} ${this.state.type} ${this.state.calcType}:<br>${casesText}`;
  }

  addPopupOnHover() {
    this.map.eachLayer((layer) => {
      if (layer.feature?.geometry) {
        let tooltipPopup;
        layer.on('mouseover', (event) => {
          tooltipPopup = L.popup({ offset: L.point(0, -10), className: 'custom', closeButton: false });
          const popupContent = this.createPopupContent(
            layer.feature.id,
            layer.feature.properties.name,
          );
          tooltipPopup.setContent(popupContent);
          tooltipPopup.setLatLng(event.latlng);
          tooltipPopup.openOn(this.map);
        });
        layer.on('mousemove', (event) => {
          tooltipPopup.setLatLng(event.latlng);
        });
        layer.on('mouseout', () => {
          this.map.closePopup(tooltipPopup);
        });
      }
    });
  }

  static getCasesNumber(num) {
    const res = Math.round(num > 1)
      ? Math.round(num)
      : Math.round(num * 1000) / 1000;
    return res;
  }

  addLegend() {
    this.legend = L.control({ position: 'topleft' });

    const classContext = this;

    this.legend.onAdd = () => {
      const div = L.DomUtil.create('div', 'info legend');

      for (let i = 0; i < this.scale.length; i += 1) {
        const number = DrawMap.getCasesNumber(this.scale[i]);
        div.innerHTML
          += `<i style="background:${DrawMap.getColor(number + 0.0001, this.scale)}"></i> ${number}${number + 0.0001 ? '+<br>' : '+'}`;
      }
      return div;
    };

    L.easyButton('<span class="map-mode-toggle">◕</span>', () => {
      this.mapModeMarkers = !this.mapModeMarkers;
      this.update(this.state);
    }).addTo(classContext.map);

    L.easyButton('<span class="legend-toggle">&equiv;</span>', () => {
      this.isLegendVisible = !this.isLegendVisible;
      if (this.isLegendVisible) {
        this.legend.addTo(classContext.map);
      } else {
        this.legend.remove();
      }
    }).addTo(classContext.map);
  }

  handleMapClicks = () => {
    this.map.eachLayer((layer) => {
      if (layer.feature && layer.feature.geometry && layer.feature.id) {
        layer.on('click', () => {
          this.onCountryClick(layer.feature.id);
        });
      }
    });
  };
}
