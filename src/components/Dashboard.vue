<template>
  <h1>Dashboard</h1>
  <Map />
  <Table v-bind:data="data" />
  <Chart />
  <List  v-bind:data="data" v-bind:error="error" v-bind:loading="loading" />
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
      loading: false,
      error: null,
      data: null,
      dataService: new DataService(),
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      this.dataService.init().then((res) => {
        this.data = res;
        this.loading = false;
      }).catch((err) => {
        this.error = err.toString();
        this.loading = false;
        throw new Error('Failed to fetch data on init', err);
      });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
