<template>
  <div class="flex flex-col flex-wrap">
  <Title>
      Cryptos
    </Title>
  <div class="flex flex-row flex-wrap">
    <Card class="">
      <template #header>
        <div class="flex justify-between">
          <div>List</div>
        <div>
          <input placeholder="Search" class="bg-slate-700 rounded-lg shadow-md text-lg font-bold text-slate-300 py-1 px-2" v-model="cryptoSearch"/>
        </div>
        </div>
      </template>
      <ul v-if="cryptosArr.length > 0" class="list-none overflow-auto h-96">
        <li class="m-3" v-for="item in cryptosArr" :key="item">
        <router-link :to="{ name: 'view', params: { 'id': item.name } }">
          <span>{{ item.name }}</span>
        </router-link>
        </li>
      </ul>
      <h2 v-else class="text">No cryptos to show</h2>
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
        cryptoSearch: '',



        coinObject: {},
        coinValue: Number,
        currency: 'usd',
        coinId: String,
      }
    },
    created() {
      this.getValue()
    },
    computed: {
      currentValue() {
        console.log(this.coinObject.bitcoin)
        return {...this.coinObject}
      },
    },
    watch: {
      cryptoSearch(value, oldValue) {
        if(value.length < oldValue.length) {
          this.resetList();
        }
        this.findCrypto(value)
      },
      listArr(value) {
        this.cryptosArr = [ ...value ];
      },
    },
    methods: {
      resetList() {
        this.cryptosArr = [ ...this.listArr ];
      },
      findCrypto(value, oldValue) {
        console.log(value, '🦖')
        this.cryptosArr = this.cryptosArr.filter((word) => word.name.includes(value));
      },
      getValue() {
        CoinsService.getValue(['list'])
        .then((response) => {
          console.log(response, '🍕')
          this.listArr = [ ...response.data ];
          // this.coinObject = { ...object.data.bitcoin }
        })
      },
    },
  }
</script>
