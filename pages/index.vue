<template>
  <div>
    <CountryFilters @update:filters="onFiltersUpdate" />

    <div v-if="pending">Loading...</div>
    <div v-else-if="error">
      {{ error.statusCode }} {{ error.statusMessage }}
    </div>
    <CountryList v-else-if="data" :countries="data" />
  </div>
</template>

<script setup lang="ts">
import { useFetchCountries } from '@/composables/useFetchCountries'
import { useCountriesStore } from '@/stores/countries'
import type { CountriesFilters } from '@/types/countries'

const store = useCountriesStore()
const filters = computed(() => store.filters)

const { data, pending, error } = await useAsyncData(
  'countries',
  () => useFetchCountries(filters.value),
  {
    watch: [filters],
  }
)

const onFiltersUpdate = (newFilters: CountriesFilters) => {
  store.filters = newFilters
}
</script>
