<template>
  <div class="container">
    <div class="switches">
      <div class="absolute">
        <button class="btn" @click = "pressBy100kBtn()">{{ getTotalBtnText }}</button>
      </div>
      <div class="all-time">
        <button class="btn" @click = "pressNewBtn()">{{ getNewButtonText }}</button>
      </div>
    </div>
    <div class="radiobuttons">
      <input type="radio" id="confirmed" name="parameter" value="Confirmed">
      <label for="confirmed">Confirmed</label>
      <input type="radio" id="deaths" name="parameter" value="deaths">
      <label for="deaths">Deaths</label>
      <input type="radio" id="recovered" name="parameter" value="recovered">
      <label for="recovered">Recovered</label>
    </div>
    <input type="text" placeholder="Search country">
    <ul>
      <li :key="country" v-for="country in countries">
        <span>
          <img :src="flags[country.code].flag" :alt="country.code">
          {{country.country}}: {{ getValue(country) }}
        </span>
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
    state: Object,
  },
  data() {
    return {
      countries: this.data.Countries,
      flags: flagsCountries,
      value: 0,
    };
  },
  computed: {
    getNewButtonText() {
      return this.state.period === 'All time' ? 'New' : 'All time';
    },
    getTotalBtnText() {
      return this.state.calcType === 'Total' ? 'Per 100k' : 'Total';
    },
  },
  methods: {
    getValue(country) {
      return country.timeline.Summary.Total.Confirmed;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container {
    background-color: $color-gray;
    padding: 10px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .switches {
  padding: 5px;
  display: flex;
  margin-bottom: 10px;
  .all-time {
    margin-right: 5px;
  }
}
.radiobuttons {
  margin-bottom: 10px;
}
label {
  margin: 5px;
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
