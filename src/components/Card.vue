<template>
<div class="rounded-lg bg-slate-900 border border-slate-700 p-3 max-h-fit m-3 last:grow">
  <div v-if="!headerTitle && $slots.header" class="h-12 text-2xl font-bold text-slate-400 antialiased">
    <slot name="header"></slot>
  </div>
  <span v-else-if="!$slots.header">{{ headerTitle }}</span>

  <div class="text-slate-500">
    <slot></slot>
  </div>
</div>
</template>
<script>
  export default{
    name: "Card",
    props: {
      headerTitle: {
        type: String,
        default: undefined,
      }
    },
    created() {}
  }
</script>
<style scoped>
</style>
