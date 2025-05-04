import type { Country } from '~/types/countries'

export async function useFetchCountry(code: Ref<string | undefined>) {
  const { data, pending, error } = await useAsyncData<Country[]>(
    'country-' + code.value,
    () => $fetch(`/api/country?codes=${code.value}`),
    { server: true }
  )

  const country = ref(data.value?.[0])

  return {
    country,
    countryPending: pending,
    countryError: error,
  }
}
