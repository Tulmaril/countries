import type { CountryCardPreviewResponse } from '~/types/countries'
import { buildCountrySearchUrl } from '~/utils/url'

export default cachedEventHandler(
  async (event) => {
    const config = useRuntimeConfig()
    const baseURL = config.public.apiBase
    const query = getQuery(event)

    const url = buildCountrySearchUrl(query)

    try {
      const data = await $fetch<CountryCardPreviewResponse>(`${baseURL}/${url}`)
      return data.sort((a, b) => a.name.common.localeCompare(b.name.common))
    } catch (error) {
      return error
    }
  },
  {
    maxAge: 60 * 60,
  }
)
