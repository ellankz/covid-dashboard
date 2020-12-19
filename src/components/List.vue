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
      <input type="radio" id="confirmed" name="parameter"
      v-model="currentType"
      checked
      @change="$emit('updateType', 'Confirmed')">
      <label for="confirmed">Confirmed</label>

      <input type="radio" id="deaths" name="parameter"
      v-model="currentType"
      @change="$emit('updateType', 'Deaths')">
      <label for="deaths">Deaths</label>

      <input type="radio" id="recovered" name="parameter"
      v-model="currentType"
      @change="$emit('updateType', 'Recovered')">
      <label for="recovered">Recovered</label>
    </div>
    <input type="text" placeholder="Search country">
    <ul>
      <li :key="country" v-for="country in countries"
      @click="$emit('updateCountry', {countryCode: country.code})">
        <span>
          <img :src="flags[country.code].flag" :alt="country.code">
        </span>
        <span class="country">{{country.country}}: </span>
        <span>{{ getValue(country) }}</span>
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
      currentType: this.state.type,
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
      if (this.getStateBtn('All time', 'Total')) {
        return country.timeline.Summary.Total[this.state.type].toLocaleString();
      }
      if (this.getStateBtn('New', 'Total')) {
        return country.timeline.Summary.New[this.state.type].toLocaleString();
      }
      if (this.getStateBtn('All time', 'Per 100k')) {
        return country.timeline.Summary.TotalPer100k[this.state.type].toFixed(2);
      }
      return country.timeline.Summary.NewPer100k[this.state.type].toFixed(2);
    },
    getStateBtn(period, value) {
      return (this.state.period === period) && (this.state.calcType === value);
    },
    pressNewBtn() {
      this.$emit('updatePeriod', this.state.period === 'All time' ? 'New' : 'All time');
    },
    pressBy100kBtn() {
      this.$emit('updateCalcType', this.state.calcType === 'Total' ? 'Per 100k' : 'Total');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container {
    background-color: $color-gray;
    padding: 10px;
    width: 350px;
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
    display: flex;
    min-width: 250px;
    .country {
      width: 100px;
    }
  }
  li:hover {
    background-color: grey;
    cursor: pointer;
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
