<template>
  <div>
    <canvas id="chart-container"></canvas>
    <div class="control">
       <button
        class="btn control__btn"
        @click="$emit('updateCalcType', state.calcType === 'Total' ? 'Per 100k' : 'Total')">
        {{ state.calcType === 'Total' ? 'Per 100k' : 'Total' }}
      </button>
      <button
        class="btn control__btn"
        @click="$emit('updatePeriod', state.period === 'All time' ? 'New' : 'All time')">
        {{ state.period === 'All time' ? 'New' : 'All time' }}
      </button>
      <input type="checkbox" id="Confirmed" value="Confirmed" v-model="currentTypes"
       @change="$emit('updateChartTypes', currentTypes)" >
      <label for="Confirmed">Confirmed</label>
      <input type="checkbox" id="Deaths" value="Deaths" v-model="currentTypes"
       @change="$emit('updateChartTypes', currentTypes)" >
      <label for="Deaths">Deaths</label>
      <input type="checkbox" id="Recovered" value="Recovered" v-model="currentTypes"
       @change="$emit('updateChartTypes', currentTypes)" >
      <label for="Recovered">Recovered</label>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js';
import moment from 'moment';
import { formatNumber } from '../helpers/formatNumber';
import countries from '../service/countries.json';

const COLOR_BLUE = '#0075ff';
const COLOR_RED = 'red';
const COLOR_GREEN = 'green';

export default {
  name: 'Chart',
  data() {
    return {
      chart: null,
      types: ['Confirmed', 'Deaths', 'Recovered'],
      currentTypes: this.state.chartTypes,
      chartConfig: {
        type: 'line',

        data: {
          labels: Object.keys(this.data.Global.cases),
          datasets: [],
        },

        options: {
          responsive: true,
          legend: {
            position: 'top',
            labels: {
              fontColor: 'white',
            },
          },
          tooltips: {
            mode: 'label',
            callbacks: {
              title(text) {
                return moment(text[0].xLabel).format('DD-MM-YYYY');
              },
            },
          },
          hover: {
            mode: 'nearest',
            intersect: true,
          },
          scales: {
            yAxes: [{
              ticks: {
                callback(label) {
                  return formatNumber(label);
                },
                fontColor: 'rgba(255, 255, 255, 0.8)',
              },
              gridLines: {
                display: true,
                color: 'rgba(255, 255, 255, 0.2)',
              },
            },
            ],
            xAxes: [{
              ticks: {
                callback(label) {
                  return moment(label).format('DD-MM-YYYY');
                },
                fontColor: 'rgba(255, 255, 255, 0.8)',
              },
              gridLines: {
                display: true,
                color: 'rgba(255, 255, 255, 0.2)',
              },
            },
            ],
          },
        },
      },
    };
  },
  props: {
    data: Object,
    loadingState: Object,
    state: Object,
  },
  watch: {
    state: {
      handler() {
        this.updateChart();
      },
      deep: true,
    },
  },

  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      const ctx = document.getElementById('chart-container').getContext('2d');
      this.chart = new Chart(ctx, this.chartConfig);
      this.addDefaultData();
      this.chart.update();
    },
    updateChart() {
      // debugger;
      this.chartConfig.data.datasets = [];
      this.currentTypes.forEach((type) => {
        this.addChartData(type);
      });
      this.chart.update();
    },
    addDefaultData() {
      this.addChartData(this.state.type);
    },
    addChartData(type) {
      let typePath = 'cases';
      let color = COLOR_BLUE;
      let dataPath = this.data.Global;
      if (this.state.country) {
        dataPath = this.data.Countries[this.state.country].timeline;
      }
      if (type === 'Deaths') {
        typePath = 'deaths';
        color = COLOR_RED;
      }
      if (type === 'Recovered') {
        typePath = 'recovered';
        color = COLOR_GREEN;
      }
      const region = this.state.country ? countries[this.state.country].name : 'Global';

      this.chartConfig.data.datasets.push({
        label: `${this.state.calcType} ${type} ${region}`,
        backgroundColor: color,
        borderColor: color,
        data: Object.values(dataPath[typePath]),
        borderWidth: 1,
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 1,
      });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
