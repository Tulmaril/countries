import type { Country } from '@/types/countries'

export async function useFetchCountries(filters: {
  key: string
  value: string
}) {
  const store = useCountriesStore()
  store.countries = []

  const query = filters.key ? `${filters.key}=${filters.value}&` : ''

  const url = `/api/countries?${query}fields=name,flags,cca3,currencies,population,region,capital`

  try {
    const data = await $fetch<Country[]>(url)
    store.countries = data
    return data
  } catch (err: any) {
    throw createError(err)
  }
}
