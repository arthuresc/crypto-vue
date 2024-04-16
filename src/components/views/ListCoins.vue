<template>
  <div class="flex flex-col flex-wrap">
  <Title>
      Cryptos
    </Title>
  <div class="flex flex-row flex-wrap">
    <Card>
      <template #header>
        List
      </template>
      <ul class="list-none overflow-hidden h-96">
        <li class="m-3" v-for="item in cryptosArr" :key="item">Bitcoin</li>
      </ul>
    </Card>
  </div>
</div>
</template>
<script>
  import CoinsService from '../../services/CoinsService';


  export default{
    name: "List",
    components: {
      // Lines,
    },
    data() {
      return {
        cryptosArr: [],
        listArr: [],



        coinObject: {},
        coinValue: Number,
        currency: 'usd',
        coinId: String,
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
        CoinsService.getValue(['list'])
        .then((response) => {
          console.log(response, '🍕')
          this.cryptosArr = [ ...response.data ];
          // this.coinObject = { ...object.data.bitcoin }
        })
      },
    },
  }
</script>
