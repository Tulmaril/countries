<template>
  <div v-if="countries.length" class="grid">
    <div class="grid__header">
      <span>Country</span>
      <span>Capital</span>
      <span>Region</span>
      <span>Population</span>
      <span>Currency</span>
      <span>Actions</span>
    </div>

    <TransitionGroup name="list" tag="div" class="grid__tbody">
      <div class="grid__row" v-for="c in countries" :key="c.cca3">
        <NuxtLink class="country-link" :to="`/country/${c.cca3}`">
          {{ c.name.common }}
        </NuxtLink>
        <span>{{ c.capital?.[0] || '—' }}</span>
        <span>{{ c.region }}</span>
        <span>{{ c.population.toLocaleString() }}</span>
        <span>
          {{
            Object.values(c.currencies || {})
              .map((cur) => cur.name)
              .join(', ') || '—'
          }}
        </span>
        <CountryCompareButton :code="c.cca3" />
      </div>
    </TransitionGroup>
  </div>

  <div v-else class="no-data">Страны не выбраны для сравнения.</div>
</template>

<script setup lang="ts">
import type { Country } from '@/types/countries'

defineProps<{ countries: Country[] }>()
</script>
