export function getOptions()  {
  return  {
    responsive: true,
    legend: {
    display: false
  },
  scales: {
    xAxes: [{
      ticks: {
        min: this.xMin,
        max: this.xMax,
      },
      grid: {
        display: true,
        drawBorder: true,
        drawOnChartArea: true,
        drawTicks: true,
      }
    }],
      yAxes: [{
      ticks: {
        min: this.yMin,
        max: this.yMax,
      },
      grid: {
        display: true,
        drawBorder: true,
        drawOnChartArea: true,
        drawTicks: true,
      }
    }]
  },
  tooltips: {
    callbacks: {
      displayColors: false,
        label: function(tooltipItem) {
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
