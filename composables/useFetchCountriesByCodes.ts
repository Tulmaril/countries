import type { Country } from '~/types/countries'

export async function useFetchCountriesByCodes(
  codes: Ref<string | undefined>,
  store: { setCountries: (countries: Country[]) => void, $id: string },
  options = {}
) {
  const { data, pending, error, refresh } = await useAsyncData<Country[]>(
    store.$id,
    async () => {
      const result = await $fetch<Country[]>(
        `/api/country-by-codes?codes=${codes.value}&fields=name,flags,cca3,currencies,population,region,capital`
      )

      store.setCountries(result)
      return result
    },

    {
      ...options,
      immediate: false,
      server: false,
    }
  )

  return {
    refresh,
    countries: data,
    countriesPending: pending,
    countriesError: error,
  }
}
