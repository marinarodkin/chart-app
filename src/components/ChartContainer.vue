<template>
    <div class="row">
      <Inputs @props="setOption"/>
      <Chart :variables="this.variables" :firstChartData ="firstChartData" :secondChartData ="secondChartData" :thirdChartData ="thirdChartData"/>
  </div>
</template>

<script>
import Chart from './Chart.vue'
import Inputs from './Inputs.vue'
import axios from 'axios'

export default {
  name: 'ChartContainer',
  components: {
    Chart, Inputs
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
      thirdChartData: []
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
      }
    },
    async getData(properties) {
      const url = 'http://localhost:3001'
      const data = await axios.get(url, {
        params: properties
      })
      console.log('ddata.length', data.length)
      return data
    }
  }
}
</script>
