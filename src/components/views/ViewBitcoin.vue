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