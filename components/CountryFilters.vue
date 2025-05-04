<template>
  <div class="filters">
    <FilterInput
      placeholder="Search by name"
      :model-value="activeFilter.value"
      @update:modelValue="(val: string) => updateFilter('name', val)"
    />

    <template v-for="filter in selectFilters" :key="filter.key">
      <select
        class="filters__select"
        :value="activeFilter.key === filter.key ? activeFilter.value : ''"
        @change="updateFilter(filter.key, $event.target.value)"
      >
        <option value="">{{ filter.placeholder }}</option>
        <option
          v-for="option in filter.options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </template>

    <button @click="clearFilter" class="btn">Clear all</button>
  </div>
</template>

<script setup lang="ts">
import { currencyOptions, langOptions, regionOptions } from '~/const/filters'
import type { CountriesFilters } from '~/types/countries'

const emit = defineEmits<{
  (e: 'update:filters', value: CountriesFilters): void
}>()

const activeFilter = ref<CountriesFilters>({ key: '', value: '' })

function updateFilter(key: string, value: string) {
  if (!value) {
    clearFilter()
    return
  }
  activeFilter.value = { key, value }
  emit('update:filters', activeFilter.value)
}

function clearFilter() {
  activeFilter.value = { key: '', value: '' }
  emit('update:filters', activeFilter.value)
}

const selectFilters = computed(() => [
  { key: 'region', placeholder: 'All regions', options: regionOptions },
  { key: 'currency', placeholder: 'All currencies', options: currencyOptions },
  { key: 'lang', placeholder: 'All languages', options: langOptions },
])
</script>
