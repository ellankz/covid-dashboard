<template>
  <h2>List</h2>
   <input type="text" placeholder="Search country">
   <ul>
    <li :key="countryCases" v-for="countryCases in countriesCases"
    @click="getTotal(countryCases)">
    <span>{{countryCases.country}}</span>
    <span>cases: {{ getValues(countryCases, 'cases') }}</span>
    <span>death: {{ getValues(countryCases, 'deaths') }}</span>
    <span>recovered: {{ getValues(countryCases, 'recovered') }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  created() {},
  props: {
    data: Object,
    loadingState: Object,
  },
  data() {
    return {
      countriesCases: this.data.Countries,
    };
  },
  methods: {
    getValues(countryCases, value) {
      return Object.values(countryCases.timeline[value])[1];
    },
    getTotal(key) {
      const [yesterdayCases, todayCases] = Object.values(key.timeline.cases);
      this.totalCases = todayCases;
      this.lastDayCases = todayCases - yesterdayCases;
      const [yesterdayDeaths, todayDeaths] = Object.values(key.timeline.deaths);
      this.totalDeaths = todayDeaths;
      this.lastDayDeaths = todayDeaths - yesterdayDeaths;
      const [yesterdayRecovered, todayRecovered] = Object.values(key.timeline.recovered);
      this.totalRecovered = todayRecovered;
      this.lastDayRecovered = todayRecovered - yesterdayRecovered;
      this.world = key.country;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
