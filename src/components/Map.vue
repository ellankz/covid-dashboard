<template>
  <div>
    <h2>Map</h2>
    <div id="map-container"></div>
  </div>
</template>
<script>
// https://travishorn.com/interactive-maps-with-vue-leaflet-5430527353c8
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import countries from '../service/geoCountries.json';

export default {
  name: 'Map',
  data() {
    return {
      map: null,
      tileLayer: null,
    };
  },
  mounted() {
    this.initMap();
    this.initLayers();
  },
  methods: {
    initMap() {
      this.map = L.map('map-container', {
        minZoom: 2,
        maxZoom: 7,
      }).setView([38.63, -90.23], 2);
      const southWest = L.latLng(-89.98155760646617, -180);
      const northEast = L.latLng(89.99346179538875, 180);
      const bounds = L.latLngBounds(southWest, northEast);
      this.map.setMaxBounds(bounds);
      this.tileLayer = L.tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
        attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: 2,
        maxZoom: 7,
        subdomains: 'abcd',
        accessToken: 'NgIHKQF7VEVamoTHhgZM7WvvcUK7jY6udBbdF1hd4cEvlRA8qQhLZN679ESuVNol',
      });
      this.tileLayer.addTo(this.map);

      L.geoJSON(countries, {
        style() {
          return {
            fillColor: 'transparent',
            fillOpacity: 1,
            stroke: true,
            color: 'grey',
            weight: 1,
          };
        },
      }).bindPopup((layer) => layer.feature.properties.name).addTo(this.map);
    },
    initLayers() {},
  },
};
</script>

<style scoped lang="scss">
  #map-container {
    height: 40rem;
    width: 100%;
  }
</style>
