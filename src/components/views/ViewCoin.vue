<template>
  <div class="flex flex-col flex-wrap">
    <Title>
        Bitcoin(BTC)
      </Title>
    <div class="flex flex-row flex-wrap">
      <Card>
        <template #header>
          Current value
        </template>
        <span class="text-6xl">{{ $filters.currency(cryptoPrices) }}</span>
      </Card>
      <Card>
        <template #header>
          Test
        </template>
        <!-- <Lines :chart-data="chartPrices"/> -->
      </Card>
    </div>
  </div>
</template>
<script>
import SimpleService from '../../services/SimpleService'
import CoinsService from '../../services/CoinsService'
export default {
  name: "View",
    components: {
      // Lines,
    },
    props: {
      id: String,
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
      // currentValue() {
      //   console.log(this.coinObject.bitcoin)
      //   return {...this.coinObject}
      // },
      idTreated() {
        return this.id.toLowerCase()
      },
      cryptoPrices() {
        return this.coinObject.market_data?.current_price.usd
      },
    },
    methods: {
      getValue() {
        CoinsService.getValue([`${this.idTreated}`], ['tickers=false','community_data=false','developer_data=false','sparkline=false'])
        .then((object) => {
          console.log('oi rodei', object)
          this.coinObject = { ...object.data }
        })
        .then(() => {
          setTimeout(() => this.getValue(), 2500)
        })
      },
    },
  }
</script>
