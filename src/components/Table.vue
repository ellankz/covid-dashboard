<template>
  <div class="container">
    <div class="options">
      <div class="location">{{ world }}</div>
      <div class="switches">
      <div class="all-time">
        <button class="btn" @click = "getLastDayData(event)">{{btnLastDayText}}</button>
      </div>
      <div class="absolute">
        <button class="btn" @click = "getDataBy100k(event)">{{ btn100kText}}</button>
      </div>
      </div>
    </div>
    <div class="inner-table">
      <div class="total total-cases">
        <div class="title">Total cases:</div>
        <span v-if ="!isLastDay && !is100k">{{ total.Confirmed.toLocaleString() }}</span>
        <span v-else-if ="isLastDay && !is100k">+{{lastDay.Confirmed.toLocaleString()}}</span>
        <span v-else-if ="is100k && !isLastDay">{{ dataBy100k.Confirmed.toFixed(2)}}</span>
        <span v-else>{{ lastDayBy100k.Confirmed.toFixed(2)}}</span>
      </div>
      <div class="total total-deaths">
        <div class="title">Total deaths:</div>
        <span v-if ="!isLastDay && !is100k">{{ total.Deaths.toLocaleString() }}</span>
        <span v-else-if ="isLastDay && !is100k">+{{lastDay.Deaths.toLocaleString()}}</span>
        <span v-else-if ="is100k && !isLastDay">{{ dataBy100k.Deaths.toFixed(2)}}</span>
        <span v-else>{{lastDayBy100k.Deaths.toFixed(2)}}</span>
      </div>
      <div class="total total-recovered">
       <div class="title">Total recovered:</div>
       <span v-if ="!isLastDay && !is100k">{{ total.Recovered.toLocaleString() }}</span>
       <span v-else-if ="isLastDay && !is100k">+{{lastDay.Recovered.toLocaleString()}}</span>
       <span v-else-if ="is100k && !isLastDay">{{ dataBy100k.Recovered.toFixed(2)}}</span>
       <span v-else>{{ lastDayBy100k.Recovered.toFixed(2)}}</span>
      </div>
    </div>
  <!-- <p>total: </p> -->
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
  },
  data() {
    return {
      world: 'World',
      btnLastDayText: 'All time',
      btn100kText: 'Absolute',
      total: this.data.Global.Summary.Total,
      lastDay: this.data.Global.Summary.New,
      dataBy100k: this.data.Global.Summary.TotalPer100k,
      lastDayBy100k: this.data.Global.Summary.NewPer100k,
      isLastDay: false,
      is100k: false,
    };
  },
  computed: {
    getCases() {
      return this.countriesCases;
    },
  },
  methods: {
    logData() {
      console.log(this.data);
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
    getLastDayData() {
      this.isLastDay = !this.isLastDay;
      if (!this.isLastDay) this.btnLastDayText = 'All time';
      else this.btnLastDayText = 'Last day';
    },
    getDataBy100k() {
      this.is100k = !this.is100k;
      if (!this.is100k) this.btn100kText = 'Absolute';
      else this.btn100kText = 'Per 100k';
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
