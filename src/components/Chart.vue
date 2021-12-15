
<script>
  import { Scatter } from 'vue-chartjs'

  export default {
  extends: Scatter,
    props: {
      firstChartData: [],
      secondChartData: [],
      thirdChartData: []
    },
    data () {
      return {
          options: {
            responsive: true,
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                suggestedMin: -2500000,
                suggestedMax: 2500000,
                ticks: {
                  suggestedMin: -2500000,
                  suggestedMax: 2500000
                }
              }]
            }
          }
    }},
    watch: {
      firstChartData: {
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
    },
  mounted () {
    this.renderAllCharts()
    },
    methods: {
    renderAllCharts () {
        this.renderChart({
          datasets: [{
            label: 'Scatter Dataset',
            data: this.firstChartData,
            backgroundColor: 'rgb(0, 0, 229)'
          },
            {
              label: 'Scatter Dataset',
              data: this.secondChartData,
              backgroundColor: 'rgb(255, 108, 0)'
            },
            {
              label: 'Scatter Dataset',
              data: this.thirdChartData,
              backgroundColor: 'rgb(102, 204, 0)'
            }
          ]
        }, this.options)
      },
    }
    /*  getVariables (outsideDiameter, insideDiameter) {
        // b32
        const wallThickness = (outsideDiameter - insideDiameter)/2
        // b33
        // =(PI()*0,25*(Sheet1!B2^2-Sheet1!B3^2))
        const crossSectionArea = Math.PI * 0.25 * (Math.pow(outsideDiameter, 2) - Math.pow(insideDiameter, 2))

        // b34 =(Sheet1!B2^2+Sheet1!B3^2)/(Sheet1!B2^2-Sheet1!B3^2)
        const KPI = (Math.pow(outsideDiameter, 2) + Math.pow(insideDiameter, 2)) / (Math.pow(outsideDiameter, 2) - Math.pow(insideDiameter, 2))
        // b35 =2*Sheet1!B2^2/(Sheet1!B2^2-Sheet1!B3^2)
        const KPO = 2 * Math.pow(outsideDiameter, 2) / (Math.pow(outsideDiameter, 2) - Math.pow(insideDiameter, 2))
        // G =Sheet1!$B$34^2+Sheet1!$B$34+1
        const variableG = Math.pow(KPI, 2) + KPI + 1
        //L =Sheet1!$B$35^2
        const variableL = Math.pow(KPO, 2)
        return { wallThickness, crossSectionArea, KPI, KPO, variableG, variableL }
      },
      countData (outsideDiameter, insideDiameter, yieldStress, scale) {
        const array = [0]
        let currNum = 0
        for (let i = 0; i < 120; i++) {
          currNum = currNum - scale
          array.push({ currNum })
        }
        const firstArray = array.reverse()
        currNum = 0
        for (let i = 0; i < 120; i++) {
          currNum = currNum + scale
          firstArray.push({ currNum })
        }

        const secondArray = [...firstArray].map((item) => {
          return {currNum: item.currNum, part: 2}
        })
          secondArray.reverse()
        const variables = this.getVariables(outsideDiameter, insideDiameter)
        // console.log('firstArray', firstArray)
        // console.log('secondArray', secondArray)
        console.log('variables', variables)
        const data = [...firstArray, ...secondArray].map((element, index) => {
          // H =(1-Sheet1!$B$34)*(F1/Sheet1!$B$33)
          const variableH = (1 - variables.KPI) * (element.currNum/variables.crossSectionArea)
          // I = =(F1/Sheet1!$B$33)^2-Sheet1!$B$4^2
          const variableI = Math.pow((element.currNum/variables.crossSectionArea),2) - Math.pow(yieldStress, 2)

          // k=(-H1-SQRT(H1^2-4*G1*I1))/(2*G1)
          // const variableK = (-variableH - Math.sqrt(Math.pow(variableH, 2) - 4 * variables.variableG * variableI)) / (2 * variables.variableG)

          // M =Sheet1!$B$35*(F1/(Sheet1!$B$33))
          const variableM = variables.KPO * (element.currNum/variables.crossSectionArea)

          // N =(F1/Sheet1!$B$33)^2-Sheet1!$B$4^2
          const variableN = Math.pow(element.currNum/variables.crossSectionArea, 2) - Math.pow(yieldStress, 2)
          if (index === 60) {
            console.log('variableH', variableH)
            console.log('variableI', variableI)
            console.log('yieldStress', yieldStress)
            console.log('variableM', variableM)
            console.log('variableN', variableN)
          }
          let variableY
          if (!element.part || element.part !== 2) {
            // j =(-H1+SQRT(H1^2-4*G1*I1))/(2*G1) =(-H1+SQRT(H1^2-4*G1*I1))/(2*G1)
            variableY = (-variableH + Math.sqrt(Math.pow(variableH, 2) - 4 * variables.variableG * variableI)) / (2 * variables.variableG)

          } else {
            // J = =(-(-M296+SQRT(M296^2-4*L296*N296))/(2*L296))
            variableY =(-(-variableM + Math.sqrt(Math.pow(variableM, 2) - 4 * variables.variableL * variableN)) / (2 * variables.variableL))
          }
            const res = {x: element.currNum, y: variableY}
          return res
        })
        console.log('data', data)
        return data
        /!*return data.map(item => {
        if (isNaN(item.y)) {
          return {x: item, y: 0}
        }
        return item
      })*!/
    }*/
}
</script>

