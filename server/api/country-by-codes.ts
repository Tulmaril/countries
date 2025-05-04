import type { CountryCardPreviewResponse } from '~/types/countries'

export default cachedEventHandler(
  async (event) => {
    const config = useRuntimeConfig()
    const baseURL = config.public.apiBase
    const query = getQuery(event)
    let codesArray

    const searchParams = new URLSearchParams()
    if (query.codes) {
      codesArray = query.codes?.split(',')
      searchParams.set('codes', query.codes)
    }
    if (query.fields) {
      searchParams.set('fields', query.fields)
    }

    try {
      const data = await $fetch<CountryCardPreviewResponse>(
        `${baseURL}/alpha?${searchParams}`
      )

      if (codesArray) {
        data.sort(
          (a, b) =>
            codesArray.indexOf(a.cca3.toLowerCase()) -
            codesArray.indexOf(b.cca3.toLowerCase())
        )
      }

      return data
    } catch (error) {
      return error
    }
  },
  {
    maxAge: 60 * 60,
    getKey: (event) => {
      return getQuery(event)?.codes?.toString() || 'default'
    },
  }
)
