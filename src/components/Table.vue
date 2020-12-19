<template>
  <div class="container">
    <div class="options">
      <div class="location">
       {{ currentCountry }}
      </div>
      <div class="switches">
      <div class="absolute">
        <button class="btn" @click = "pressBy100kBtn()">{{ getTotalBtnText }}</button>
      </div>
      <div class="all-time">
        <button class="btn" @click = "pressNewBtn()">{{ getNewButtonText }}</button>
      </div>
      </div>
    </div>
    <div class="inner-table">
      <div class="total total-cases">
        <div class="title">Total cases:</div>
        <span v-if="getStateBtn('All time', 'Total')">
          {{ getTotal.Confirmed.toLocaleString() }}
        </span>
        <span v-else-if ="getStateBtn('New', 'Total')">
          +{{ getLastDayData.Confirmed.toLocaleString() }}
        </span>
        <span v-else-if ="getStateBtn('All time', 'Per 100k')">
          {{ getTotalBy100k.Confirmed.toFixed(2) }}</span>
        <span v-else>
          {{ getLastDayBy100k.Confirmed.toFixed(2) }}
        </span>
      </div>
      <div class="total total-deaths">
        <div class="title">Total deaths:</div>
        <span v-if ="getStateBtn('All time', 'Total')">
          {{ getTotal.Deaths.toLocaleString() }}
        </span>
        <span v-else-if ="getStateBtn('New', 'Total')">
          +{{ getLastDayData.Deaths.toLocaleString() }}
        </span>
        <span v-else-if ="getStateBtn('All time', 'Per 100k')">
          {{ getTotalBy100k.Deaths.toFixed(2) }}
        </span>
        <span v-else>
          {{ getLastDayBy100k.Deaths.toFixed(2) }}
        </span>
      </div>
      <div class="total total-recovered">
       <div class="title">Total recovered:</div>
       <span v-if ="getStateBtn('All time', 'Total')">
        {{ getTotal.Recovered.toLocaleString() }}
       </span>
       <span v-else-if ="getStateBtn('New', 'Total')">
        +{{ getLastDayData.Recovered.toLocaleString() }}
       </span>
       <span v-else-if ="getStateBtn('All time', 'Per 100k')">
        {{ getTotalBy100k.Recovered.toFixed(2) }}
       </span>
       <span v-else>
        {{ getLastDayBy100k.Recovered.toFixed(2) }}
       </span>
      </div>
    </div>
    <button
      class="btn expand_btn"
      @click="$emit('expandBlock', 'table')">
      Expand
    </button>
  </div>
</template>

<script>
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
    };
  },
  computed: {
    currentCountry() {
      if (this.state.country === null) return this.country;
      return this.data.Countries[this.state.country].country;
    },
    getTotal() {
      if (this.state.country === null) return this.data.Global.Summary.Total;
      return this.data.Countries[this.state.country].timeline.Summary.Total;
    },
    getTotalBy100k() {
      if (this.state.country === null) return this.data.Global.Summary.TotalPer100k;
      return this.data.Countries[this.state.country].timeline.Summary.TotalPer100k;
    },
    getLastDayData() {
      if (this.state.country === null) return this.data.Global.Summary.New;
      return this.data.Countries[this.state.country].timeline.Summary.New;
    },
    getLastDayBy100k() {
      if (this.state.country === null) return this.data.Global.Summary.NewPer100k;
      return this.data.Countries[this.state.country].timeline.Summary.NewPer100k;
    },
    getNewButtonText() {
      return this.state.period === 'All time' ? 'New' : 'All time';
    },
    getTotalBtnText() {
      return this.state.calcType === 'Total' ? 'Per 100k' : 'Total';
    },
  },
  methods: {
    logData() {
      console.log(this.data);
    },
    pressNewBtn() {
      this.$emit('updatePeriod', this.state.period === 'All time' ? 'New' : 'All time');
    },
    pressBy100kBtn() {
      this.$emit('updateCalcType', this.state.calcType === 'Total' ? 'Per 100k' : 'Total');
    },
    getStateBtn(period, value) {
      return (this.state.period === period) && (this.state.calcType === value);
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
