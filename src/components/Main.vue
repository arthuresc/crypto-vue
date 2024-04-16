<template>
  <div class="mobile:col-start-2 desktop:col-start-4 col-end-13 row-start-2 row-end-17 p-3">
    <router-view></router-view>
  </div>
</template>

<script>
  import SimpleService from '../services/SimpleService';
  import CoinsService from '../services/CoinsService';
  // import Lines from './Charts/Lines.vue';

  export default{
    name: "Main",
    components: {
      // Lines,
    },
    data() {
      return {
        coinObject: {},
        coinValue: Number,
        currency: 'usd',
        coinId: String,
        // chartPrices: [],
      }
    },
    created() {
      this.getValue()
      // this.getChartData()
    },
    computed: {
      currentValue() {
        console.log(this.coinObject.bitcoin)
        return {...this.coinObject}
      },
    },
    methods: {
      getValue() {
        SimpleService.getValue(['price'], ['ids=bitcoin', 'vs_currencies=usd,brl', 'include_last_updated_at=true'])
        .then((object) => {
          this.coinObject = { ...object.data.bitcoin }
        })
      },

      // getChartData() {
      //   console.log('Entrou')
      //   CoinsService.getValue(['bitcoin','market_chart'], ['vs_currency=usd', 'days=1'])
      //   .then((object) => {
      //     console.log(object.data , '🐦')
      //     this.chartPrices = object.data.prices.map((item) => {
      //       return item
      //     })
      //     // this.chartPrices = [...object.data.prices]
      //   })
      // },
    },
  }
</script>
<style scoped>
</style>
