<template>
  <div class="mobile:col-start-2 desktop:col-start-4 col-end-13 row-start-2 row-end-17 p-3">
    <router-view></router-view>
  </div>
</template>

<script>

  export default{
    name: "Main",
    components: {
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
    created() {},
    computed: {},
    methods: {},
  }
</script>
