<template>
  <div class="country__fact">
    Borders:
    <NuxtLink
      :to="`/country/${item.cca3}`"
      class="country__fact-item"
      v-for="item in borders"
      :key="item.cca3"
    >
      {{ item.name.common }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { CountryName } from '~/types/countries'

const props = defineProps<{ borders: CountryName[] }>()
</script>
