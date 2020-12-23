<template>
  <div class="dashboard_wrap">
    <h1 class="dashboard__title">Covid-19 Tracking Dashboard</h1>
    <Loader v-if="!data" />
    <div
      v-bind:class="`${layout.baseClass} ${layout.expanded ? `expanded ${layout.block}` : ''}`"
      v-if="data">
      <Map class="map dashboard__element"
        v-bind:data="data"
        v-bind:state="state"
        @updateType="handleUpdateType"
        @updateCalcType="handleUpdateCalcType"
        @updatePeriod="handleUpdatePeriod"
        @updateCountry="handleUpdateCountry"
        @expandBlock="handleExpand"
        @shrinkBlock="handleShrink" />
      <Table class="table dashboard__element"
        v-bind:data="data"
        v-bind:state="state"
        @updateCalcType="handleUpdateCalcType"
        @updatePeriod="handleUpdatePeriod"
        @shrinkBlock="handleShrink"
        @expandBlock="handleExpand" />
      <Chart class="chart dashboard__element"
        v-bind:data="data"
        v-bind:state="state"
        @updateCalcType="handleUpdateCalcType"
        @updatePeriod="handleUpdatePeriod"
        @updateChartTypes="handleUpdateChartTypes"
        @expandBlock="handleExpand"
        @shrinkBlock="handleShrink" />
      <List class="list dashboard__element"
        v-bind:data="data"
        v-bind:state="state"
        @updateCountry="handleUpdateCountry"
        @updateType="handleUpdateType"
        @updateCalcType="handleUpdateCalcType"
        @updatePeriod="handleUpdatePeriod"
        @expandBlock="handleExpand"
        @shrinkBlock="handleShrink" />
    </div>
    <Footer v-if="data" v-bind:data="data" />
  </div>
</template>

<script>
import { DataService } from '../../service/DataService';
import Map from '../Map/Map.vue';
import List from '../List/List.vue';
import Table from '../Table/Table.vue';
import Chart from '../Chart/Chart.vue';
import Footer from '../Footer/Footer.vue';
import Loader from '../Loader/Loader.vue';

const TYPES = ['Confirmed', 'Deaths', 'Recovered'];

export default {
  name: 'Dashboard',
  components: {
    Map,
    Table,
    Chart,
    List,
    Footer,
    Loader,
  },
  data() {
    return {
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
      this.dataService.init().then((res) => {
        this.data = res;
      }).catch((err) => {
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
        if (!dataPath['New Per 100k']) {
          const newData = TYPES.reduce((acc, type) => {
            acc[type] = this.dataService.getHistoricalDataForEachDayPer100k(
              type, this.state.country,
            );
            return acc;
          }, {});
          dataPath['New Per 100k'] = newData;
        }
      } else if (this.state.calcType === 'Per 100k') {
        if (!dataPath['Per 100k']) {
          const newData = TYPES.reduce((acc, type) => {
            acc[type] = this.dataService.getHistoricalDataPer100k(
              type, this.state.country,
            );
            return acc;
          }, {});
          dataPath['Per 100k'] = newData;
        }
      } else if (this.state.period === 'New') {
        if (!dataPath.New) {
          const newData = TYPES.reduce((acc, type) => {
            acc[type] = this.dataService.getHistoricalDataForEachDay(
              type, this.state.country,
            );
            return acc;
          }, {});
          dataPath.New = newData;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
  .dashboard__title {
    margin-top: 3px;
    font-size: 2rem;
    margin-bottom: 0.5rem;

      @media (max-width: $breakpoint-width-1) {
        font-size: 1.6rem;
        margin-bottom: 0.7rem;
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
    max-width: 100%;
    max-height: 100%;
  }

  .table {
    grid-area: table;
  }

  .dashboard_wrap {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-top: 1.2rem;
      height: 100vh;
      padding-top: 0.7rem;
      padding-bottom: 0.4rem;

      @media (max-width: $breakpoint-width-1) {
        padding-bottom: 0.7rem;
        padding-top: 0.4rem;
      }
  }

  .dashboard {
    display: grid;
    grid-template-areas: "map table"
                         "map chart"
                         "map list";
    grid-template-columns: 5fr calc(30% - 0.25rem);
    grid-template-rows: 0.5fr 1fr 1fr;
    grid-gap: 0.5rem;
    height: 88vh;

    @media (max-width: $breakpoint-width-1) {
      grid-template-columns: 5fr calc(25% - 0.25rem);
      grid-template-rows: 0.5fr 0.5fr 1fr;
      height: 90vh;
    }

    &__element {
      background-color: $color-gray;
      border-radius: 5px;
      padding: 0.5rem;
      position: relative;
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

    &.expanded.list {
      grid-template-areas: "list list"
                           "list list"
                           "list list";

      .map, .chart, .table {
        display: none;
      }

      .list {
        width: 100%;
      }
    }

    @media (max-width: $breakpoint-width-2) {
      grid-template-columns: 1fr calc(33% - 0.25rem) 1fr;
      grid-template-rows: 1fr 4fr;
      grid-template-areas: "list chart table"
                           "list map map";
      height: 90vh;

      &.expanded.map {
      grid-template-areas: "map map map"
                           "map map map"
                           "map map map";
      }

      &.expanded.chart {
      grid-template-areas: "chart chart chart"
                           "chart chart chart"
                           "chart chart chart";
      }

      &.expanded.table {
      grid-template-areas: "table table table"
                           "table table table"
                           "table table table";
      }

      &.expanded.list {
      grid-template-areas: "list list list"
                           "list list list"
                           "list list list";
      }
    }

    @media (max-width: $breakpoint-width-4) {
      grid-template-columns: 1fr calc(60% - 0.25rem);
      grid-template-rows: 1fr 1fr auto;
      grid-template-areas: "list chart"
                           "list table"
                           "map map";
      height: auto;
    }

    @media (max-width: $breakpoint-width-4) and (min-height: 800px) {
          grid-template-rows: 1fr 0.6fr auto;
    }

    @media (max-width: $breakpoint-width-5) {
      grid-template-columns: 1fr;
      grid-template-rows: 0.5fr 1.5fr 1fr auto;
      grid-template-areas: "table"
                           "list"
                           "chart"
                           "map";
      height: auto;
    }
  }

</style>
