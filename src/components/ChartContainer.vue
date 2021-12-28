<template>
    <div class="row">
      <div class="chart-wrapper">
      <Chart :variables="this.variables" :scale="axeRange" :firstChartData ="firstChartData" :secondChartData ="secondChartData" :thirdChartData ="thirdChartData"/>
        <div class="scale-wrapper">
          <div @click.prevent='setScalePlus' class="scale scale-plus"><a href="#" class="scale-link">
            <span class="material-icons">zoom_in
               </span></a></div>
          <div @click.prevent='setScaleMinus' class="scale scale-minus">
            <a href="#" class="scale-link">
              <span class="material-icons">zoom_out
               </span>
            </a></div>
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
    msg: String
  },
  data() {
    return {
      options: {},
      variables: {},
      firstChartData: [],
      secondChartData: [],
      thirdChartData: [],
      axeRange: 2
    }
  },
  methods: {
    async setOption(properties) {
      console.log('set options properties', properties)
      if (properties.number === 1) {
        const chartData = await this.getData(properties)
        this.firstChartData = chartData.data
      }
      if (properties.number === 2) {
        const chartData = await this.getData(properties)
        this.secondChartData = chartData.data
      }
      if (properties.number === 3) {
        const chartData = await this.getData(properties)
        this.thirdChartData = chartData.data
        console.log('this.thirdChartData', this.thirdChartData)
      }
    },
    async getData(properties) {
      const url = 'http://localhost:3001'
      const data = await axios.get(url, {
        params: properties
      })
      console.log('ddata.length', data.length)
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
.chart-wrapper {
  max-width: 1200px;
  min-width: 90%;
  max-height: 1800px;
  border: 2px solid grey;
  margin: 0 auto;
  position: relative;
}

.scale-wrapper {
  position: absolute;
  top: 0;
  right: 2px;
}

.scale {
  color: blue;
  font-size: 18px;
  font-weight: bold;
  padding: 0 2px;
  border: 1px solid blue;
  border-radius: 3px;
  width: 15px;
}

.scale-link {
  text-decoration: none;
}
</style>
