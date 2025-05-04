<template>
  <div>
    <h1>Compare Countries</h1>
    <div v-if="countriesPending">Loading</div>
    <CountryCompareTable
      v-if="store.countries.length"
      :countries="store.countries"
    />
    <div v-else>No countries to compare</div>
  </div>
</template>

<script setup lang="ts">
const store = useCompareStore()
const codes = computed(() => store.codes.join(','))
const { refresh, countriesPending } = await useFetchCountriesByCodes(
  codes,
  store
)

onMounted(async () => {
  await refresh()
})
</script>
