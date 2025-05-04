<template>
  <div class="currency__list">
    <div
      v-for="(currency, code) in currencies"
      :key="code"
      class="currency__item"
    >
      {{ currency.name }} <br />
      <div class="currency__code">{{ currency.symbol }} ({{ code }})</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CountryCurrencies } from '~/types/countries'

defineProps<{
  currencies: CountryCurrencies
}>()
</script>
