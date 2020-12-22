<template>
  <div>
    <div id="map-container"></div>
    <div class="control">
      <ArrowButton
          v-bind:options="['Confirmed', 'Deaths', 'Recovered']"
          v-bind:currentOption="state.type"
          @updateOption="(type) => {$emit('updateType', type)}"
        />
      <div class="control__buttons">
        <ArrowButton
          v-bind:options="['Total', 'Per 100k']"
          v-bind:currentOption="state.calcType"
          @updateOption="(calcType) => {$emit('updateCalcType', calcType)}"
        />
        <ArrowButton
          v-bind:options="['All time', 'New']"
          v-bind:currentOption="state.period"
          @updateOption="(period) => {$emit('updatePeriod', period)}"
        />
      </div>
      <ExpandButton v-bind:expanded="expanded" @expandClick="expanded ? shrinkMap() : expandMap()"/>
    </div>
  </div>
</template>

<script>
import { DrawMap } from './DrawMap';
import ExpandButton from '../ExpandButton/ExpandButton.vue';
import ArrowButton from '../ArrowButton/ArrowButton.vue';

export default {
  name: 'Map',
  data() {
    return {
      map: null,
      parameterTypes: ['Confirmed', 'Deaths', 'Recovered'],
      currentType: this.state.type,
      expanded: false,
    };
  },
  components: {
    ExpandButton,
    ArrowButton,
  },
  props: {
    data: Object,
    loadingState: Object,
    state: Object,
  },
  watch: {
    state: {
      handler() {
        console.log(this.state);
        this.updateMap();
      },
      deep: true,
    },
  },

  mounted() {
    this.createMap();
  },
  methods: {
    handleCountryClick(countryCode) {
      this.$emit('updateCountry', { countryCode });
    },
    createMap() {
      this.drawMap = new DrawMap(this.state, this.data, this.handleCountryClick);
      this.map = this.drawMap.init();
    },
    updateMap() {
      this.drawMap.update(this.state);
    },
    expandMap() {
      this.expanded = true;
      this.$emit('expandBlock', 'map');
      this.handleResize();
    },
    shrinkMap() {
      this.expanded = false;
      this.$emit('shrinkBlock');
      this.handleResize();
    },
    handleResize() {
      setTimeout(() => {
        this.drawMap.update(this.state);
        this.drawMap.redraw();
      }, 0);
    },
  },
};
</script>

<style lang="scss">
  #map-container {
    height: 81vh;
    width: 100%;
  }
  .leaflet-container {
    background: $color-gray;
    outline: 0;
  }

  .leaflet-pane > svg path.leaflet-interactive {
     transition: fill .4s ease, stroke .4s ease;
  }

  .custom {
    .leaflet-popup-tip {
      background: $color-gray-2;
    }

    .leaflet-popup-content-wrapper {
      background: $color-gray-2;
      color: $color-white;
      border-radius: 4px;

      h4 {
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
      }
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
    color: $color-gray-1;
    background: $color-gray-2;
    margin-left: 0.5rem;
    padding: 1rem;
    border-radius: 4px;
    color: $color-white;

    i {
      width: 18px;
      height: 18px;
      float: left;
      margin-right: 8px;
      opacity: 1;
    }
  }

  .control {
    margin-top: 0.8rem;
    display: flex;
    align-items: center;

    &__radio {
      margin-right: 0.6rem;

      label {
        font-size: 1rem;
        margin-left: 0.3rem;
        cursor: pointer;
      }
    }

    &__buttons {
      margin-left: auto;
    }
  }
</style>
