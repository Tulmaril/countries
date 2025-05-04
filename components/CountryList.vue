<template>
  <TransitionGroup name="list" tag="div" class="countries-grid">
    <CountryCard
      v-for="country in countries"
      :key="country.cca3"
      :country="country"
    />
  </TransitionGroup>
</template>

<script setup lang="ts">
import type { Country } from '~/types/countries'

const props = defineProps<{ countries: Country[] }>()
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

.list-leave-active {
  position: absolute;
}
</style>
