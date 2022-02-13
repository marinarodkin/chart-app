<template>
    <div class="row">
      <div class="chart-wrapper">
      <Chart :variables="this.variables" ref="chart" :scale="axeRange" :height="height" :chartData ="chartData" :imperialSystem="imperialSystem"/>
        <div class="scale-wrapper">
          <div @click.prevent='setScalePlus' class="scale scale-plus">
            <span class="material-icons">zoom_in
               </span>
          </div>
          <div @click.prevent='setScaleMinus' class="scale scale-minus">
              <span class="material-icons">zoom_out
               </span>
          </div>
        </div>
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
      this.chartData = chartData
      console.log('this.chartData', this.chartData)
      console.log('!this.$refs[chart]', this.$refs['chart'])
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
