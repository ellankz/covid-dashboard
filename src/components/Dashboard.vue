<template>
  <h1>Dashboard</h1>
  <Map />
  <Table v-bind:data="data"/>
  <Chart />
  <List />
</template>

<script>
import { getData } from '../service/data';
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
      data: getData(),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
