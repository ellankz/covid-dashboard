<template>
  <h1>Dashboard</h1>
  <div class="dashboard">
    <Map class="map dashboard__element" />
    <Table class="table dashboard__element" v-bind:data="data" v-bind:loadingState="loadingState" />
    <Chart class="chart dashboard__element" />
    <List class="list dashboard__element"  v-bind:data="data" v-bind:loadingState="loadingState" />
  </div>
</template>

<script>
import { DataService } from '../service/DataService';
import Map from './Map.vue';
import List from './List.vue';
import Table from './Table.vue';
import Chart from './Chart.vue';

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
