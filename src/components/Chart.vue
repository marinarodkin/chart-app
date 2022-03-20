<template>
<div id="chart">
  <ScatterChart v-bind="scatterChartProps" />
  <img style="width: 500px" v-if="imgData" :src="imgData" />
</div>
</template>

<script>
import { ScatterChart, useScatterChart } from "vue-chart-3";
import { ref, computed, defineComponent } from "@vue/composition-api";
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
    const imgData = ref(null);

    const options = computed(() => ({
      responsive: true,
      maintainAspectRatio: false,
      height: 800,
      onChartRender: (chart) => console.log('onChartRender, chat', chart),
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          type: 'linear',
          position: 'bottom',
          display: true,
          min: -900000,
          max: 900000,
          gridLines: {
            display: true
          },
          ticks: {
            beginAtZero: false,
            autoSkip: false,
            fontSize: 12,
            count: 10,
            stepSize: props.imperialSystem ? 200000 : 100000000,
            color: 'red',
            min: -1000000,
            max: 1000000,
            callback: function (val,index) {
              if (props.imperialSystem) {
                return index % 2 === 0 ? val.toExponential() : ''
              } else {
                return index % 2 === 0 ? val.toExponential() : ''
              }
            }
          }
        }],
        yAxes: [{
          ticks: {
            stepSize: 2000,
            callback: function (val,index) {
              return index % 2 === 0 ? val : ''
            }
          },
          grid: {
            display: true,
            drawTicks: true,
          }
        }]
      },
      tooltips: {
        mode: 'nearest',
        displayColors: false,
        callbacks: {
          title: function () {
            return ''
          },
          label: function (tooltipItem) {
            // const imperialSystemInChart = data.datasets[0].imperialSystem
            const imperialSystemInChart = true
            const x = parseInt(tooltipItem.xLabel).toExponential()
            const y = parseInt(tooltipItem.yLabel)
            const xUnit = imperialSystemInChart ? ' {ksi}' : ' {kN}'
            const yUnit = imperialSystemInChart ? ' {lbf}' : ' {Mpa}'
            return [
              y >= 0 ? 'Internal pressure' + ': ' + y + yUnit: 'External Pressure' + ': ' + y + yUnit,
              x >= 0 ? 'Tension' + ': ' + x + xUnit : 'Compression' + ': ' + x + xUnit
            ]
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
      },
    }));



    const chartData = computed(() => {
      console.log('scatterChartRef.value', scatterChartRef.value)
      const canvas = scatterChartRef.value?.$refs?.canvasRef
      if (canvas?.style) {
        const windowHeight = document.documentElement.clientHeight - 100
        canvas.style.height = `${windowHeight}px`
      }
      // const newStyle = canvas.style + 'height: 600px'
      // console.log('newStyle', newStyle)
      // canvas.style = newStyle
      // canvas.style = 'height: 600px'
      console.log('scatterChartRef.value?.chartInstance', scatterChartRef.value?.chartInstance)
      console.log('scatterChartRef.value?.chartInstance.tooltip', scatterChartRef.value?.chartInstance?.tooltip)
      return ({
      datasets: props.chartData
    })});

    const { scatterChartProps, scatterChartRef } = useScatterChart({
      chartData,
      options,
    });

    console.log('scatterChartRef', scatterChartRef, scatterChartRef.value)


    function shuffleData() {
      // data.value = shuffle(data.value);
      // legendTop.value = !legendTop.value;
      // imgData.value = lineChartRef.value.chartInstance.toBase64Image();
      // lineChartRef.value.chartInstance.resetZoom();
    }

    function zoom() {
      scatterChartRef.value.chartInstance.zoom(1.01);
    }

    return { shuffleData, scatterChartProps, scatterChartRef, imgData, zoom };
  },
});
</script>

