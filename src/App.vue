<script>
  import Icon from './components/Icon.vue'
  export default{
    name: "App",
    components: {Icon},
  }
</script>

<template>
  <div>
    <h1 class="text-3xl">Hello World</h1>
    <h1 class="text-3xl font-bold underline">Hello World</h1>
    <h1 class="text-3xl font-bold underline">Hello World</h1>
    <h1 class="text-3xl font-bold underline">Hello World</h1>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
      <Icon />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
