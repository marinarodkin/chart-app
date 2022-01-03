
<script>
  import { Scatter } from 'vue-chartjs'

  export default {
    extends: Scatter,
    props: {
      chartData: [],
      size: {
        type: Number,
        default: 1.3,
      }
    },
    data() {
      return {
        xMin: 0,
        xMax: 0,
        yMin: 0,
        yMax: 0,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom',
              display: true,
              min: -2000000,
              max: 2000000,
              gridLines: {
                display: true
              },
              ticks: {
                beginAtZero: false,
                autoSkip: false,
                fontSize: 12,
                count: 10,
                stepSize: 200000,
                min: -2000000,
                max: 2000000,
                color: 'red',
                callback: function (val,index) {
                  return index % 2 === 0 ? val / 10000 : ''
                }
              }
            }],
            yAxes: [{
              ticks: {
                stepSize: 2000,
                callback: function (val,index) {
                  return index % 2 === 0 ? val / 1000 : ''
                }
              },
              grid: {
                display: true,
                drawTicks: true,
              }
            }]
          },
          tooltips: {
            callbacks: {
              displayColors: false,
              label: function (tooltipItem) {
                const x = parseInt(tooltipItem.xLabel)
                const y = parseInt(tooltipItem.yLabel)
                return [
                  x > 0 ? 'Compression' + ': ' + x : 'Tension' + ': ' + x,
                  y > 0 ? 'External pressure' + ': ' + y : 'Internal Pressure' + ': ' + y
                ]
              }
            }
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
        console.log(number)
        const colors = {
          0: 'rgb(0, 0, 229)',
          1: 'rgb(230, 147, 39)',
          2: 'rgb(24, 222, 97)',
          3: 'rgb(230, 147, 39)',
          4: 'rgb(136, 46, 191)'
        }
        return colors[number]
      },
      buildDataset() {
        return this.chartData.map(item => {
          return {
            label: 'Scatter Dataset',
            data: item.data.data,
            backgroundColor: this.getColor(item.id),
            pointRadius: item.id.includes('single-load') ? '4' : '2'
          }
        })
      },
      renderAllCharts() {
        console.log('render chart', this.chartData)
        this.getMinMaxForAxes()
        let dataset = this.buildDataset()
        // console.log('dataset', dataset)
        this.renderChart({
          datasets: dataset
        }, this.options)
        this.resizeCanvas()
      },
      resizeCanvas() {
        const $wrapper = document.querySelector('chart-wrapper')
        console.log($wrapper)
      },
      getMinMaxForAxes() {
        const allDatasets = [...this.chartData[0].data.data]
        const allXData = allDatasets.filter(item => item.y).map(item => item.x * 1)
        const allYData = allDatasets.map(item => item.y * 1).filter(item => !isNaN(item))
        this.xMax = Math.min.apply(null, allXData)
        this.xMin = Math.max.apply(null, allXData)
        this.yMax = Math.max.apply(null, allYData)
        this.yMin = Math.min.apply(null, allYData)
        this.options.scales.xAxes[0].ticks.min = this.xMin * this.size
        this.options.scales.xAxes[0].ticks.max = this.xMax * this.size
        this.options.scales.yAxes[0].ticks.min = this.yMin * this.size
        this.options.scales.yAxes[0].ticks.max = this.yMax * this.size
      }
    }
}
</script>

