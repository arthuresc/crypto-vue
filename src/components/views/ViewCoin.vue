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
        <span class="text-6xl">{{ $filters.currency(currentValue.usd) }}</span>
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
      currentValue() {
        console.log(this.coinObject.bitcoin)
        return {...this.coinObject}
      },
      idTreated() {
        return this.id.toLowerCase()
      },
    },
    methods: {
      getValue() {
        SimpleService.getValue(['price'], [`ids=${this.idTreated}`, 'vs_currencies=usd', 'include_last_updated_at=true'])
        .then((object) => {
          this.coinObject = { ...object.data[this.idTreated] }
        })
      },
    },
  }
</script>
