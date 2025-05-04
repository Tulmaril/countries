import type { Country } from '~/types/countries'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBase
  const query = getQuery(event)

  const searchParams = new URLSearchParams()
  if (query.codes) {
    searchParams.set('codes', query.codes)
  }
  if (query.fields) {
    searchParams.set('fields', query.fields)
  }

  try {
    const data = await $fetch<Country[]>(`${baseURL}/alpha?${searchParams}`)
    return data.sort((a, b) => a.name.common.localeCompare(b.name.common))
  } catch (error) {
    return error
  }
})
