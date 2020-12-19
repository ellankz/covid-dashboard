<template>
  <div class="dashboard_wrap">
    <h1>Covid-19 Tracking Dashboard</h1>
    <div v-bind:class="`${layout.baseClass} ${layout.expanded ? `expanded ${layout.block}` : ''}`">
      <Map
        v-if="data"
        v-bind:data="data"
        v-bind:loadingState="loadingState"
        v-bind:state="state"
        @updateType="handleUpdateType"
        @updateCalcType="handleUpdateCalcType"
        @updatePeriod="handleUpdatePeriod"
        @updateCountry="handleUpdateCountry"
        @expandBlock="handleExpand"
        @shrinkBlock="handleShrink"
        class="map dashboard__element" />
      <Table
        class="table dashboard__element"
        v-if="data"
        v-bind:data="data"
        v-bind:loadingState="loadingState"
        v-bind:state="state"
        @updateCalcType="handleUpdateCalcType"
        @updatePeriod="handleUpdatePeriod"
        @updateChartTypes="handleUpdateChartTypes"
        @shrinkBlock="handleShrink"
        @expandBlock="handleExpand" />
      <Chart
        v-if="data"
        v-bind:data="data"
        v-bind:loadingState="loadingState"
        v-bind:state="state"
        @updateCalcType="handleUpdateCalcType"
        @updatePeriod="handleUpdatePeriod"
        @updateChartTypes="handleUpdateChartTypes"
        @expandBlock="handleExpand"
        @shrinkBlock="handleShrink"
        class="chart dashboard__element" />
      <List class="list dashboard__element"
        v-if="data"
        v-bind:data="data"
        v-bind:loadingState="loadingState"
        v-bind:state="state"
        @updateCalcType="handleUpdateCalcType"
        @updatePeriod="handleUpdatePeriod"
        @updateChartTypes="handleUpdateChartTypes"/>
    </div>
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
      layout: {
        expanded: false,
        block: null,
        baseClass: 'dashboard',
      },
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loadingState.loading = true;
      this.dataService.init().then((res) => {
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
    handleExpand(block) {
      this.layout.expanded = true;
      this.layout.block = block;
    },
    handleShrink() {
      this.layout.expanded = false;
      this.layout.block = null;
    },
    addChartDataForState() {
      let dataPath = this.data.Global;
      if (this.state.country) {
        dataPath = this.data.Countries[this.state.country].timeline;
      }
      if (this.state.calcType === 'Per 100k' && this.state.period === 'New') {
        const newData = TYPES.reduce((acc, type) => {
          acc[type] = this.dataService.getHistoricalDataForEachDayPer100k(
            type, this.state.country,
          );
          return acc;
        }, {});
        dataPath['New Per 100k'] = newData;
      } else if (this.state.calcType === 'Per 100k') {
        const newData = TYPES.reduce((acc, type) => {
          acc[type] = this.dataService.getHistoricalDataPer100k(
            type, this.state.country,
          );
          return acc;
        }, {});
        dataPath['Per 100k'] = newData;
      } else if (this.state.period === 'New') {
        const newData = TYPES.reduce((acc, type) => {
          acc[type] = this.dataService.getHistoricalDataForEachDay(
            type, this.state.country,
          );
          return acc;
        }, {});
        dataPath.New = newData;
      }
    },
  },
};
</script>

<style scoped lang="scss">
 .map {
    grid-area: map;
  }

  .list {
    grid-area: list;
  }

  .chart {
    grid-area: chart;
    max-width: 100%;
    max-height: 100%;
  }

  .table {
    grid-area: table;
  }

  .dashboard__element {
    position: relative;
  }

  .dashboard_wrap {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
  }

  .dashboard {
    display: grid;
    grid-template-areas: "map table"
                         "map chart"
                         "map list";
    grid-template-rows: 0.5fr 1fr 1fr;
    grid-template-columns: 5fr calc(30% - 0.25rem);
    grid-gap: 0.5rem;
    height: 92vh;

    &__element {
      background-color: $color-gray;
      border-radius: 5px;
      padding: 0.8rem;
    }

    &.expanded.map {
      grid-template-areas: "map map"
                           "map map"
                           "map map";

      .chart, .table, .list {
        display: none;
      }

      .map {
        width: 100%;
      }
    }

    &.expanded.chart {
      grid-template-areas: "chart chart"
                           "chart chart"
                           "chart chart";

      .map, .table, .list {
        display: none;
      }

      .chart {
        width: 100%;
      }
    }

    &.expanded.table {
      grid-template-areas: "table table"
                           "table table"
                           "table table";

      .map, .chart, .list {
        display: none;
      }

      .table {
        width: 100%;
      }
    }

  }

</style>
