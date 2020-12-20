<template>
  <div>
    <div class="chart-container">
      <div class="chart-wrap">
        <canvas id="chart-container"></canvas>
      </div>
      <div class="control">
        <div class="control__checkboxes">
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
        <div class="control__buttons">
          <ArrowButton
            v-bind:options="['Total', 'Per 100k']"
            v-bind:currentOption="state.calcType"
            @updateOption="(calcType) => {$emit('updateCalcType', calcType)}"
          />
          <ArrowButton
            v-bind:options="['All time', 'New']"
            v-bind:currentOption="state.period"
            @updateOption="(period) => {$emit('updatePeriod', period)}"
          />
        </div>
        <ExpandButton
          v-bind:expanded="expanded"
          @expandClick="expanded ? shrinkChart() : expandChart()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js';
import moment from 'moment';
import { formatNumber } from '../helpers/formatNumber';
import ExpandButton from './ExpandButton.vue';
import ArrowButton from './ArrowButton.vue';
import countries from '../service/countries.json';

const COLOR_BLUE = '#0075ff';
const COLOR_RED = 'red';
const COLOR_GREEN = 'green';

export default {
  name: 'Chart',
  data() {
    return {
      chart: null,
      expanded: false,
      types: ['Confirmed', 'Deaths', 'Recovered'],
      currentTypes: this.state.chartTypes,
      chartConfig: {
        type: 'line',

        data: {
          labels: Object.keys(this.data.Global.Confirmed),
          datasets: [],
        },

        options: {
          responsive: true,
          responsiveAnimationDuration: 0,
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
          onHover: (event, chartElement) => {
            // eslint-disable-next-line no-param-reassign
            event.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
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
              type: 'time',
              time: {
                unit: 'month',
              },
              ticks: {
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
  components: {
    ExpandButton,
    ArrowButton,
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
      let color = COLOR_BLUE;
      let dataPath = this.data.Global;
      if (this.state.country) {
        dataPath = this.data.Countries[this.state.country].timeline;
      }
      if (this.state.calcType === 'Per 100k' && this.state.period === 'New') {
        dataPath = dataPath['New Per 100k'];
      } else if (this.state.calcType === 'Per 100k') {
        dataPath = dataPath['Per 100k'];
      } else if (this.state.period === 'New') {
        dataPath = dataPath.New;
      }
      if (type === 'Deaths') {
        color = COLOR_RED;
      }
      if (type === 'Recovered') {
        color = COLOR_GREEN;
      }
      const region = this.state.country ? countries[this.state.country].name : 'Global';

      this.chartConfig.data.datasets.push({
        label: `${this.state.calcType} ${type} ${this.state.period} ${region}`,
        backgroundColor: color,
        borderColor: color,
        data: Object.values(dataPath[type]),
        borderWidth: 1,
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 1,
      });
    },
    expandChart() {
      this.expanded = true;
      this.$emit('expandBlock', 'chart');
      this.handleResize();
    },
    shrinkChart() {
      this.expanded = false;
      this.$emit('shrinkBlock');
      this.handleResize();
    },
    handleResize() {
      setTimeout(() => {
        this.updateChart();
      }, 0);
    },
  },
};
</script>

<style scoped lang="scss">
  .chart-container {
    margin: 0 auto;
  }
  .chart-wrap {
    position: relative;
    max-width: 50rem;
    margin: 0 auto;
  }
  #chart-container {
    width: 100%;
    height: 100%;
  }

  .control {
    justify-content: center;
    flex-wrap: wrap;
    max-width: 50rem;
    margin: 0.5rem auto 0;

    &__checkboxes {
      input {
        margin-right: 0.5rem;
      }

      label {
        margin-right: 0.8rem;
      }
    }
  }
</style>
