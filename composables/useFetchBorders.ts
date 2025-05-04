import type { CountryName } from '~/types/countries'

export async function useFetchBorders(codes: Ref<string | undefined>) {
  const shouldFetch = computed(() => !!codes.value)

  const { data, pending, error, refresh, execute } = await useAsyncData<
    CountryName[]
  >(
    'borders-' + codes.value,
    () => $fetch(`/api/country-by-codes?codes=${codes.value}&fields=name,cca3`),
    {
      immediate: shouldFetch.value,
    }
  )
  return {
    borders: data,
    bordersPending: pending,
    bordersError: error,
  }
}
