<template>
  <div class="card">
    <NuxtImg
      :src="country.flags.png"
      loading="lazy"
      :alt="`${country.name.common} flag`"
      class="card__flag"
    />
    <div class="card__info">
      <div class="card__header">
        <h2 class="card__name">{{ country.name.common }}</h2>
        <CountryFavoritesButton :code="country.cca3" />
      </div>

      <p><strong>Capital:</strong> {{ country.capital?.[0] || '—' }}</p>
      <p><strong>Region:</strong> {{ country.region }}</p>
      <p><strong>Population:</strong> {{ country.population }}</p>
      <div>
        <strong>Currencies:</strong>
        <CountryCurrencies :currencies="country.currencies" />
      </div>

      <div class="card__actions">
        <NuxtLink
          v-if="!hideLink"
          :to="`/country/${country.cca3}`"
          class="details-link"
          >More Info</NuxtLink
        >
        <CountryCompareButton :code="country.cca3" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Country } from '~/types/countries'

const props = defineProps<{ country: Country; hideLink?: boolean }>()
</script>
