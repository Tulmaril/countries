<template>
  <div v-if="country">
    <div class="country">
      <div class="country__info">
        <h1>{{ country.name.official }}</h1>
        <div class="country__fact">
          Languages:
          <span
            class="country__fact-item"
            v-for="([code, name], index) in Object.entries(country.languages)"
            :key="index"
          >
            {{ name }} ({{ code }})
          </span>
        </div>
        <CountryBorders v-if="borders" :borders="borders" />
        <CountryMap
          :lat="country?.capitalInfo?.latlng?.[0] || 0"
          :lng="country?.capitalInfo?.latlng?.[1] || 0"
          :name="country?.capital?.[0] || country?.name.common"
        />
      </div>

      <CountryCard :country="country" hide-link />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHistoryStore } from '@/stores/history'

const history = useHistoryStore()
const route = useRoute()
const code = computed(() => route.params.code.toString().toLowerCase())

const { country, countryPending, countryError } = await useFetchCountry(code)
const codes = computed(() => country?.value?.borders?.join(','))

const { borders, bordersPending, bordersError } = await useFetchBorders(codes)
onMounted(() => {
  history.loadFromStorage()
  history.add(code.value)
})
</script>
