<template>
<div id="chart">
  <ScatterChart ref="scatterRef" v-bind="scatterChartProps" :options="options" @chart:render="handleChartRender"  :height="height"/>
</div>
</template>

<script>
import { ScatterChart, useScatterChart } from "vue-chart-3";
import { ref, computed, defineComponent, onMounted } from "@vue/composition-api";
import { Chart, Tooltip } from 'chart.js';
Chart.register(Tooltip);
// import { shuffle } from "lodash-es";

export default defineComponent({
  name: "Chart",
  components: {
    ScatterChart,
  },
  props: {
    chartData: [],
    size: {
      type: Number,
      default: 1.3,
    },
    imperialSystem: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      dataForChart: {},
      xMin: 0,
      xMax: 0,
      yMin: 0,
      yMax: 0,
      allChartData: {},
    }
  },
  setup(props) {
    const chartRef = ref();

    onMounted(() => {
      console.log('this', this)
      // getMinMaxForAxes()
    });

    const options = ref({
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index'
      },
      scales: {
        x: {
          type: 'linear',
          position: 'center',
          display: true,
          color: '#000000',
          gridLines: {
            display: true
          },
          title: {
            display: false,
            text: "Tension/Compression",
          },
          ticks: {
            beginAtZero: false,
            autoSkip: false,
            fontSize: 12,
            count: 10,
            stepSize: props.imperialSystem ? 200000 : 100000000,
            callback: function (val, index) {
              if (props.imperialSystem) {
                return index % 2 === 0 ? val.toExponential(2) : ''
              } else {
                return index % 2 === 0 ? val.toExponential(2) : ''
              }
            }
          },
          grid: {
            display: true,
            drawBorder: true,
            drawTicks: true,
            color: function (context) {
              if (context.tick.value === 0) {
                return '#000000';
              }
              return '#c7cbd1'
            },
          }
        },
        y: {
          position: 'center',
          title: {
            display: false,
            text: "Pressure",
          },
          ticks: {
            stepSize: 2000,
            callback: function (val,index) {
              return index % 2 === 0 ? Math.round(val) : ''
            }
          },
          grid: {
            drawBorder: true,
            drawTicks: true,
            display: true,
            color: function (context) {
              if (context.tick.value === 0) {
                return '#000000';
              }
              return '#c7cbd1'
            },
          }
        }
      },
      hover: {
        mode: 'nearest'
      },
      plugins: {
        zoom: {
          zoom: {
            wheel: {
              enabled: true,
            },
            pinch: {
              enabled: true,
            },
            mode: "xy",
          },
        },
        legend: {
          display: false
        },
        tooltip: {
          mode: 'nearest',
          displayColors: false,
          callbacks: {
            title: function () {
              return ''
            },
            label: function (tooltipItem) {
              const imperialSystemInChart = true
              const x = parseInt(tooltipItem?.parsed?.x).toExponential(2)
              const y = Math.round(parseInt(tooltipItem?.parsed?.y))
              const xUnit = imperialSystemInChart ? ' {ksi}' : ' {kN}'
              const yUnit = imperialSystemInChart ? ' {lbf}' : ' {Mpa}'
              return [
                y >= 0 ? 'Internal pressure' + ': ' + y + yUnit: 'External Pressure' + ': ' + y + yUnit,
                x >= 0 ? 'Tension' + ': ' + x + xUnit : 'Compression' + ': ' + x + xUnit
              ]
            }
          }
        }
      },
    });

    const chartData = computed(() => {
      return ({
      datasets: props.chartData
    })});

    const height = computed(() => {
      return document.documentElement.clientHeight - 80
       });

    const { scatterChartProps, scatterChartRef } = useScatterChart({
      chartData,
      options,
    });

    /*
    function getMinMaxForAxes() {
      console.log('props.chartData', props.chartData)
      if (props.chartData && props.chartData.length > 0) {
        const allChartData = props.chartData.flatMap(data => data.data)
        const allXData = allChartData.map(item => item.x)
        const allYData = allChartData.map(item => item.y)
        const xMin = Math.min.apply(null, allXData)
        const xMax = Math.max.apply(null, allXData)
        const yMax = Math.max.apply(null, allYData)
        const yMin = Math.min.apply(null, allYData)
        options.scales.x.ticks.min = Math.ceil(xMin * 1.3 / 100000) * 100000
        options.scales.x.ticks.max = Math.ceil(xMax * 1.3 / 100000) * 100000
        options.scales.y.ticks.min = Math.ceil(yMin * 1.3 / 1000) * 1000
        options.scales.y.ticks.max = Math.ceil(yMax * 1.3 / 1000) * 1000
        options.scales.x.ticks.stepSize = this.imperialSystem ? 200000 : 6000000
      }
    }
     */

    function handleChartRender() {
      // const windowHeight = document.documentElement.clientHeight - 100
    }


    function shuffleData() {
    }

    function zoom() {
      scatterChartRef.value.chartInstance.zoom(1.01);
    }

    return { shuffleData, scatterChartProps, scatterChartRef, zoom, handleChartRender, options, chartRef, height };
  },
});
</script>

