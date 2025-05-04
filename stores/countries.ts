import type { CountriesFilters, Country } from '@/types/countries'

export const useCountriesStore = defineStore('countries', () => {
  const countries = ref<Country[]>([])

  const filters = ref(<CountriesFilters>{
    key: '',
    value: '',
  })

  return {
    countries,
    filters,
  }
})
