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

export default {
  name: "View",
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
    },
  }
</script>
