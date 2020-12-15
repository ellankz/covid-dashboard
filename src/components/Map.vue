<template>
  <div>
    <div id="map-container"></div>
    <div class="control">
      <div v-for="type in parameterTypes" v-bind:key="type" class="control__radio">
        <input
          type="radio"
          v-bind:value="type"
          v-model="currentType"
          v-bind:id="type"
          @change="$emit('updateType', $event.target.value)">
        <label v-bind:for="type">{{ type }}</label>
      </div>
      <button
        class="btn control__btn"
        v-show="state.calcType === 'Per 100k'"
        @click="$emit('updateCalcType', 'Total')">
        Total
      </button>
      <button
        class="btn control__btn"
        v-show="state.calcType === 'Total'"
        @click="$emit('updateCalcType', 'Per 100k')">
        Per 100k
      </button>
      <button
        class="btn control__btn"
        v-show="state.period === 'All time'"
        @click="$emit('updatePeriod', 'New')">
        New
      </button>
      <button
        class="btn control__btn"
        v-show="state.period === 'New'"
        @click="$emit('updatePeriod', 'All time')">
        All time
      </button>
    </div>
  </div>
</template>

<script>
import { DrawMap } from './DrawMap';

export default {
  name: 'Map',
  data() {
    return {
      map: null,
      tileLayer: null,
      currentParameter: 'total',
      parameterTypes: ['Confirmed', 'Deaths', 'Recovered'],
      currentType: this.state.type,
    };
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
  }
</style>
