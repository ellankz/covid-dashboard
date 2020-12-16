<template>
  <div>
    <h2>Chart</h2>
    <canvas id="chart-container"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
import moment from 'moment';
import { formatNumber } from '../helpers/formatNumber';

const COLOR_BLUE = '#0075ff';

export default {
  name: 'Chart',
  data() {
    return {
      chart: null,
      currentType: this.state.type,
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
        console.log(this.state);
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
      this.chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
          labels: Object.keys(this.data.Global.cases),
          datasets: [{
            label: 'Total confirmed cases global',
            backgroundColor: COLOR_BLUE,
            borderColor: COLOR_BLUE,
            data: Object.values(this.data.Global.cases),
            borderWidth: 1,
            fill: false,
            pointRadius: 1,
            pointHoverRadius: 1,
          }],
        },

        // Configuration options go here
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
                // debugger;
                return moment(text.xLabel).format('YYYY-MM-DD');
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
                  return moment(label).format('YYYY-MM-DD');
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
      });
    },
    updateChart() {
      this.chart.update();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
