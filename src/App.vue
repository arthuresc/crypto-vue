<template>
  <div id="app" class="h-dvh grid mobile:grid-cols-5 desktop:grid-cols-12 grid-rows-16 w-full bg-slate-950">
    <Sidenav />
    <Main />
    <Header />
  </div>
</template>
<script>
  import Sidenav from './components/Sidenav.vue'
  import Main from './components/Main.vue'
  import Header from './components/Header.vue'

  import SimpleService from './services/SimpleService';
  export default{
    name: "App",
    components: {Sidenav, Main, Header},
    created() {
      // SimpleService.getValue(['price', 'bitcoin']).then((teste) => {
      // })
    }
  }
</script>
<style scoped>
</style>
