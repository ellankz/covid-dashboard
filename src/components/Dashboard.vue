<template>
  <h1>Dashboard</h1>
  <div class="dashboard">
    <Map
      v-if="data"
      v-bind:data="data"
      v-bind:loadingState="loadingState"
      v-bind:state="state"
      @updateType="handleUpdateType"
      @updateCalcType="handleUpdateCalcType"
      @updatePeriod="handleUpdatePeriod"
      @updateCountry="handleUpdateCountry"
      class="map dashboard__element" />
    <Table
      v-if="data"
      class="table dashboard__element"
      v-bind:data="data"
      v-bind:loadingState="loadingState" />
    <Chart
      v-if="data"
      v-bind:data="data"
      v-bind:loadingState="loadingState"
      v-bind:state="state"
      @updateCalcType="handleUpdateCalcType"
      @updatePeriod="handleUpdatePeriod"
      @updateChartTypes="handleUpdateChartTypes"
      class="chart dashboard__element" />
    <List class="list dashboard__element"  v-bind:data="data" v-bind:loadingState="loadingState" />
  </div>
</template>

<script>
import { DataService } from '../service/DataService';
import Map from './Map.vue';
import List from './List.vue';
import Table from './Table.vue';
import Chart from './Chart.vue';

const TYPES = ['Confirmed', 'Deaths', 'Recovered'];
// const PERIODS = ['All time', 'New'];
// const CALC_TYPES = ['Total', 'Per 100k'];

export default {
  name: 'Dashboard',
  components: {
    Map,
    Table,
    Chart,
    List,
  },
  data() {
    return {
      loadingState: {
        loading: false,
        error: null,
      },
      data: null,
      dataService: new DataService(),
      state: {
        country: null,
        type: 'Confirmed',
        calcType: 'Total',
        period: 'All time',
        chartTypes: ['Confirmed'],
      },
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loadingState.loading = true;
      return this.dataService.init().then((res) => {
        this.data = res;
        this.loadingState.loading = false;
        console.log(this.data);
      }).catch((err) => {
        this.loadingState.error = err.toString();
        this.loadingState.loading = false;
        throw err;
      });
    },
    handleUpdateType(newType) {
      this.state.type = newType;
      this.addChartDataForState();
    },

    handleUpdateCalcType(newType) {
      this.state.calcType = newType;
      this.addChartDataForState();
    },
    handleUpdatePeriod(newPeriod) {
      this.state.period = newPeriod;
      this.addChartDataForState();
    },
    handleUpdateCountry(country) {
      if (this.dataService.hasCountryData(country.countryCode)) {
        this.state.country = country.countryCode;
      } else {
        this.state.country = null;
      }
      this.addChartDataForState();
    },
    handleUpdateChartTypes(types) {
      this.state.chartTypes = types;
      this.addChartDataForState();
    },
    addChartDataForState() {
      this.dataService.addChartDataForState(this.state, TYPES);
    },
  },
};
</script>

<style scoped lang="scss">
  .dashboard {
    display: grid;
    grid-template-areas: "list map table"
                         "list  map chart";
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 4fr 2fr;
    grid-gap: 0.5rem;

    &__element {
      background-color: $color-gray;
      border-radius: 5px;
      padding: 0.8rem;
    }
  }

  .map {
    grid-area: map;
  }

  .list {
    grid-area: list;
  }

  .chart {
    grid-area: chart;
  }

  .table {
    grid-area: table;
  }
</style>
