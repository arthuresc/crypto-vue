<template>
  <div class="mobile:bg-slate-950 desktop:bg-slate-900 mobile:col-span-1 desktop:col-span-3 row-start-1 row-end-17 border-r-2 border-slate-700">
    <div class="bg-slate-900 flex justify-center items-center h-28">
      <img class="w-48" src="../assets/icons/logo-projetin.svg"/>
    </div>
    <div class="w-full h-20 flex flex-wrap justify-center items-center divide-y divide-slate-700">
      <div class="bg-violet-900 w-full h-20 flex justify-center items-center">
        <span class="text-amber-200 text-center text-2xl"> Coins </span>
      </div>
      <div class="hover:bg-violet-400 bg-slate-900 w-full h-20 flex justify-center items-center">
        <span class="text-amber-200 text-center text-2xl"> My Wallet </span>
      </div>
      <div class="hover:bg-violet-400 bg-slate-900 w-full h-20 flex justify-center items-center">
        <span class="text-amber-200 text-center text-2xl"> Settings </span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: "Sidenav",
    created() {
    }
  }
</script>
<style scoped>
</style>
