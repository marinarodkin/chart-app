<template>
    <div class="row">
      <div class="chart-wrapper">
        <Chart :variables="this.variables" ref="chart" :scale="axeRange" :height="height" :chartData ="chartData" :imperialSystem="imperialSystem"/>
      </div>
      </div>
</template>

<script>
import Chart from './Chart.vue'

import axios from 'axios'

export default {
  name: 'ChartContainer',
  components: {
    Chart
  },
  props: {
    msg: String,
    inputData: {
      type: Array,
      default: () => []
    },
    singleLoadsData: {
      type: Array,
      default: () => []
    },
    scale: {
      type: String,
      default: '12'
    },
    imperialSystem: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      options: {},
      variables: {},
      axeRange: 2,
      chartData: [],
      height: 550
    }
  },
  watch: {
    inputData: {
      deep: true,
      handler() {
        this.setChartData()
      }
    },
    singleLoadsData: {
      deep: true,
      handler() {
        this.setSingleLoadsData()
      }
    },
    scale: {
      handler() {
        this.setChartData()
      }
    }
  },
  mounted() {
    const windowHeight = document.documentElement.clientHeight
    console.log('windowHeight', windowHeight)
    this.height = windowHeight -100
  },
  methods: {
    async setChartData() {
      console.log('imperialSystem in Chart cont', this.imperialSystem)
      let chartData = []
      for (let i=0; i < this.inputData.length; i++) {
        if (this.inputData[i].data) {
          const {outsideDiameter, insideDiameter, yieldStress} = this.inputData[i].data
          const imperialSystem = this.imperialSystem
          const scale = this.scale * 1000
          const calculatedData = await this.getData({outsideDiameter, insideDiameter, yieldStress, scale, imperialSystem})
          chartData.push({id: this.inputData[i].id, data: calculatedData})
        }
      }
      this.chartData = this.buildDataset(chartData)
      console.log('this.chartData', this.chartData)
    },
    buildDataset(chartData) {
      const dataset = chartData.map(item => {
        return {
          label: 'Dataset',
          data: item.data.data,
          backgroundColor: this.getColor(item.id),
          borderColor: this.getColor(item.id),
          fill: false,
          lineTension: 1,
          pointRadius: item.id.includes('single-load') ? '4' : '1',
          imperialSystem: this.imperialSystem,
          showLine:true
        }
      })
      this.allChartData = dataset.flatMap(set => set.data)
      return dataset
    },
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
    setSingleLoadsData() {
      const singleLoadsChartData = this.singleLoadsData.filter(item => item.visible).map(item => {
        return {
          id: item.id,
          data: {
            data: [
              {
                x: item.data?.pressure,
                y: item.data?.force
              }
            ]}
          }
      })
      // clear old single-inputs data
      const chartData = this.chartData.filter(item => !item.id.includes('single-load'))
      this.chartData = [...chartData, ...singleLoadsChartData]

    },
    async getData(properties) {
      const url = 'http://localhost:3001'
      // const url = 'https://dry-forest-73581.herokuapp.com/'
      const data = await axios.get(url, {
        params: properties
      })
      return data
    },
    setScalePlus() {
      if (this.axeRange > 0.4) {
        this.axeRange = this.axeRange - 0.1
      }
    },
    setScaleMinus() {
      if (this.axeRange < 4) {
        this.axeRange = this.axeRange + 0.1
      }
    }
  }
}
</script>
<style>

</style>
