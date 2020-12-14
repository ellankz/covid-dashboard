<template>
  <div class="container">
  <div class="options">
    <div class="switches">
      <div class="all-time">
        <button @click = "getLastDayData(event)">{{btnLastDayText}}</button>
      </div>
      <div class="absolute">
        <button @click = "getDataBy100k(event)">{{ btn100kText}}</button>
      </div>
    </div>
    <div class="location">{{ world }}</div>
  </div>
   <table>
    <tr class="totals">
      <td class="total-cases">
        <span >Total cases:</span><br>
        <span v-if ="!isLastDay && !is100k">{{ total.Confirmed }}</span>
        <span v-else-if ="isLastDay && !is100k">{{lastDay.Confirmed}}</span>
        <span v-else-if ="is100k && !isLastDay">{{ dataBy100k.Confirmed.toFixed(2)}}</span>
        <span v-else>{{ lastDayBy100k.Confirmed.toFixed(2)}}</span>
      </td>
      <td class="total-deaths">
        <span>Total deaths:</span><br>
        <span v-if ="!isLastDay && !is100k">{{ total.Deaths }}</span>
        <span v-else-if ="isLastDay && !is100k">{{lastDay.Deaths}}</span>
        <span v-else-if ="is100k && !isLastDay">{{ dataBy100k.Deaths.toFixed(2)}}</span>
        <span v-else>{{lastDayBy100k.Deaths.toFixed(2)}}</span>
      </td>
      <td class="total-recovered">
       <span>Total recovered:</span><br>
       <span v-if ="!isLastDay && !is100k">{{ total.Recovered }}</span>
       <span v-else-if ="isLastDay && !is100k">{{lastDay.Recovered}}</span>
       <span v-else-if ="is100k && !isLastDay">{{ dataBy100k.Recovered.toFixed(2)}}</span>
       <span v-else>{{ lastDayBy100k.Recovered.toFixed(2)}}</span>
      </td>
    </tr>
   </table>
  <!-- <p>total: </p> -->
  </div>
  {{data}}
</template>

<script>
export default {
  name: 'Table',
  created() {
    //this.logData();
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
      else this.btn100kText = 'Case/100k';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$colorBg: #222222;
$colorBorder: #4D4D4D;
$colorRecoveredText: #72A603;
$colorRed: #BF0A0A;
$colorDeath: #67676C;
$colorText: #E0E0E0;
$colorRecovered: #3B7E09;

.container {
  display: inline-block;
  background-color: #54575c;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
}

.options {
  display: flex;
  align-items: center;
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

.totals td {
  border-bottom: 1px solid grey;
  padding: 5px;
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
