<template>
  <div>
    <h1>History Countries</h1>
    <div v-if="countriesPending">Loading</div>
    <CountryList
      v-else-if="store.countries.length"
      :countries="store.countries"
    />
    <div v-else>No history</div>
  </div>
</template>

<script setup lang="ts">
const store = useHistoryStore()
const codes = computed(() => store.codes.join(','))
const { refresh, countriesPending } = await useFetchCountriesByCodes(
  codes,
  store
)

onMounted(async () => {
  await refresh()
})
</script>
