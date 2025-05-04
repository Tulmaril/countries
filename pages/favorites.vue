<template>
  <div>
    <h1>Favorite Countries</h1>
    <div v-if="countriesPending">Loading</div>
    <CountryList
      v-else-if="store.countries.length"
      :countries="store.countries"
    />
    <div v-else>No favorites</div>
  </div>
</template>

<script setup lang="ts">
const store = useFavoritesStore()
const codes = computed(() => store.codes.join(','))
const { refresh, countriesPending } = await useFetchCountriesByCodes(
  codes,
  store
)

onMounted(async () => {
  await refresh()
})
</script>
