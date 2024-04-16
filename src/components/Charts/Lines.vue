<script>
import Base from './_base.vue'
export default {
  name: 'ChartLine',
  extends: Base,
  data() {
    return{
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(value) {
        this.prototype.series[0]['data'] = [...value]
        chart.render();
      }
    }
  },
  computed: {
  },

}
</script>