<template>
  <div class="container">
    <input type="text" placeholder="Search country">
    <ul>
      <li :key="countryCases" v-for="countryCases in countriesCases"
        @click="getTotal(countryCases)">
        <span>
          <img :src="flags[countryCases.code].flag" :alt="countryCases.code">
          {{countryCases.country}}
        </span>
        <span>{{ getValues(countryCases, 'cases') }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import flagsCountries from '../service/countries.json';

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
      flags: flagsCountries,
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
  .container {
    background-color: $color-gray;
    padding: 10px;
  }
  ul {
    overflow: auto;
    height: 300px;
    margin-left: 0;
    padding-left: 0;
  li {
    width: 100%;
  }
  li:hover {
    background-color: grey;
  }
}
img {
  margin-right: 10px;
  width: 20px;
}

span {
  margin-right: 10px;
}
</style>
