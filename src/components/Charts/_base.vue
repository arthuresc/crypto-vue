<template>
  <div id="chartEl"></div>
</template>
<script>
import ApexCharts from 'apexcharts'

const chartEl = document.getElementById('chartEl')
const chart = new ApexCharts(chartEl , {})

export default{
  name: 'Chart',
  props: {
    chartData: {
      type: [Number, String, Object, Array],
      default: undefined,
    }
  },
  data() {
    return {
    }
  },
  mounted() {
    chart.render();
  },
  computed: {},
  methods: {}
}
</script>