
<script>
  import { Line } from 'vue-chartjs'
  // import { Scatter } from 'vue-chartjs'

  export default {
    extends: Line,
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
        xMin: 0,
        xMax: 0,
        yMin: 0,
        yMax: 0,
        allChartData: [],
        options: {
          responsive: true,
          maintainAspectRatio: false,
          height: 600,
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
                stepSize: this.imperialSystem ? 200000 : 100000000,
                color: 'red',
                min: -1000000,
                max: 1000000,
                callback: function (val,index) {
                  if (this.imperialSystem) {
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
              label: function (tooltipItem, data) {
                const imperialSystemInChart = data.datasets[0].imperialSystem
                const x = parseInt(tooltipItem.xLabel).toExponential()
                const y = parseInt(tooltipItem.yLabel)
                const xUnit = imperialSystemInChart ? ' {ksi}' : ' {kN}'
                const yUnit = imperialSystemInChart ? ' {lbf}' : ' {Mpa}'
                return [
                  x >= 0 ? 'Compression' + ': ' + x + xUnit : 'Tension' + ': ' + x + xUnit,
                  y >= 0 ? 'External pressure' + ': ' + y + yUnit: 'Internal Pressure' + ': ' + y + yUnit
                ]
              }
            }
          },
          hover: {
            mode: 'nearest'
          }
        }
      }
    },
    watch: {
      chartData: {
        deep: true,
        handler() {
          this.renderAllCharts()
        }
      },
      secondChartData: {
        deep: true,
        handler() {
          this.renderAllCharts()
        }
      },
      thirdChartData: {
        deep: true,
        handler() {
          this.renderAllCharts()
        }
      },
      size: {
        deep: true,
        handler() {
          this.renderAllCharts()
        }
      }
    },
    mounted() {
      // eslint-disable-next-line no-self-assign
      // this.renderAllCharts()
    },
    methods: {
      getColor(id) {
        const number = id.substr(id.length-1, 1)
        const colors = {
          0: 'rgb(0, 0, 229)',
          1: 'rgb(230, 147, 39)',
          2: 'rgb(24, 222, 97)',
          3: 'rgb(230, 187, 139)',
          4: 'rgb(136, 46, 191)',
          5: 'rgb(50, 100, 229)',
          6: 'rgb(190, 147, 59)',
          7: 'rgb(24, 282, 197)',
          8: 'rgb(330, 347, 39)',
          9: 'rgb(0, 0, 0)'
        }
        return colors[number]
      },
      buildDataset() {
        const dataset =  this.chartData.map(item => {
          return {
            label: 'Scatter Dataset',
            data: item.data.data,
            backgroundColor: this.getColor(item.id),
            borderColor: this.getColor(item.id),
            fill: false,
            lineTension: 1,
            pointRadius: item.id.includes('single-load') ? '4' : '1',
            imperialSystem: this.imperialSystem
          }
        })
        this.allChartData = dataset.flatMap(set => set.data)
        return dataset
      },
      renderAllCharts() {
        let dataset = this.buildDataset()
        this.getMinMaxForAxes()
        this.renderChart({
          datasets: dataset
        }, this.options)
        this.resizeCanvas()
      },
      resizeCanvas() {
        window.setTimeout(() => {
          const $canvas = document.querySelector('canvas')
          console.log('$canvas', $canvas)
          // $canvas.style.height = '600px'
        }, 1000)
      },
      getMinMaxForAxes() {
        const allXData = this.allChartData.map(item => item.x)
        const allYData = this.allChartData.map(item => item.y)
        this.xMin = Math.min.apply(null, allXData)
        this.xMax = Math.max.apply(null, allXData)
        this.yMax = Math.max.apply(null, allYData)
        this.yMin = Math.min.apply(null, allYData)
        this.options.scales.xAxes[0].ticks.min = Math.ceil(this.xMin * 1.3 / 100000) * 100000
        this.options.scales.xAxes[0].ticks.max = Math.ceil(this.xMax * 1.3 / 100000) * 100000
        this.options.scales.yAxes[0].ticks.min = Math.ceil(this.yMin * 1.3 / 1000) * 1000
        this.options.scales.yAxes[0].ticks.max = Math.ceil(this.yMax * 1.3 / 1000) * 1000
        this.options.scales.xAxes[0].ticks.stepSize = this.imperialSystem ? 200000 : 6000000
      }
    }
}
</script>

