<template>
  <div class="container">
    <div class="options">
      <div class="location">
       {{ currentCountry }}
      </div>
      <div class="switches">
      <div class="all-time">
        <button class="btn" @click = "pressNewBtn(event)">{{ btnLastDayText }}</button>
      </div>
      <div class="absolute">
        <button class="btn" @click = "pressBy100kBtn(event)">{{ btn100kText }}</button>
      </div>
      </div>
    </div>
    <div class="inner-table">
      <div class="total total-cases">
        <div class="title">Total cases:</div>
        <span v-if ="!isLastDay && !is100k">{{ getTotal.Confirmed.toLocaleString() }} </span>
        <span v-else-if ="isLastDay && !is100k">
          +{{getLastDayData.Confirmed.toLocaleString()}}
        </span>
        <span v-else-if ="is100k && !isLastDay">{{ getTotalBy100k.Confirmed.toFixed(2)}}</span>
        <span v-else>{{ getLastDayBy100k.Confirmed.toFixed(2)}}</span>
      </div>
      <div class="total total-deaths">
        <div class="title">Total deaths:</div>
        <span v-if ="!isLastDay && !is100k">{{ getTotal.Deaths.toLocaleString() }}</span>
        <span v-else-if ="isLastDay && !is100k">+{{getLastDayData.Deaths.toLocaleString()}}</span>
        <span v-else-if ="is100k && !isLastDay">{{ getTotalBy100k.Deaths.toFixed(2)}}</span>
        <span v-else>{{getLastDayBy100k.Deaths.toFixed(2)}}</span>
      </div>
      <div class="total total-recovered">
       <div class="title">Total recovered:</div>
       <span v-if ="!isLastDay && !is100k">{{ getTotal.Recovered.toLocaleString() }}</span>
       <span v-else-if ="isLastDay && !is100k">+{{getLastDayData.Recovered.toLocaleString()}}</span>
       <span v-else-if ="is100k && !isLastDay">{{ getTotalBy100k.Recovered.toFixed(2)}}</span>
       <span v-else>{{ getLastDayBy100k.Recovered.toFixed(2)}}</span>
      </div>
    </div>
  </div>
  {{  }}
</template>

<script>
import flagsCountries from '../service/countries.json';

export default {
  name: 'Table',
  created() {
    this.logData();
  },
  props: {
    data: Object,
    state: Object,
  },
  data() {
    return {
      country: 'World',
      btnLastDayText: 'All time',
      btn100kText: 'Total',
      total: this.data.Global.Summary.Total,
      lastDay: this.data.Global.Summary.New,
      totalBy100k: this.data.Global.Summary.TotalPer100k,
      lastDayBy100k: this.data.Global.Summary.NewPer100k,
      isLastDay: false,
      is100k: false,
      flags: flagsCountries,
    };
  },
  computed: {
    getCases() {
      return this.countriesCases;
    },
    currentCountry() {
      if (this.state.country === null) return this.country;
      return this.data.Countries[this.state.country].country;
    },
    getTotal() {
      if (this.state.country === null) return this.total;
      return this.data.Countries[this.state.country].timeline.Summary.Total;
    },
    getTotalBy100k() {
      if (this.state.country === null) return this.total;
      return this.data.Countries[this.state.country].timeline.Summary.TotalPer100k;
    },
    getLastDayData() {
      if (this.state.country === null) return this.lastDay;
      return this.data.Countries[this.state.country].timeline.Summary.New;
    },
    getLastDayBy100k() {
      if (this.state.country === null) return this.lastDayBy100k;
      return this.data.Countries[this.state.country].timeline.Summary.NewPer100k;
    },
  },
  watch: {
    state: {
      deep: true,
    },
  },
  methods: {
    logData() {
      console.log(this.data);
    },
    pressNewBtn() {
      this.isLastDay = !this.isLastDay;
      if (!this.isLastDay) {
        this.btnLastDayText = 'All time';
        this.$emit('updatePeriod', 'All time');
      } else {
        this.btnLastDayText = 'New';
        this.$emit('updatePeriod', 'New');
      }
    },
    pressBy100kBtn() {
      this.is100k = !this.is100k;
      if (!this.is100k) {
        this.btn100kText = 'Total';
        this.$emit('updateCalcType', 'Total');
      } else {
        this.btn100kText = 'Per 100k';
        this.$emit('updateCalcType', 'Per 100k');
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.container {
  background-color: $color-gray;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
}

.options {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  margin-bottom: 15px;
}
.title {
  margin-bottom: 5px;
}

.switches {
  padding: 5px;
  display: flex;
  margin-right: 15px;
  .all-time {
    margin-right: 10px;
  }
}

.inner-table {
  display: flex;
  justify-content: space-around;
}

.total {
}
.all-time {
  button {
    width: 70px;
  }
}

.absolute {
  button {
    width: 90px;
  }
}
</style>
