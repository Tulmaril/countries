export function buildCountrySearchUrl(query: Record<string, string>) {
  const { fields, codes, ...filters } = query
  const filterKeys = Object.keys(filters)

  let path = 'all'
  if (filterKeys.length === 1) {
    const key = filterKeys[0]
    path = `${key}/${filters[key]}`
  }

  const searchParams = new URLSearchParams()
  if (fields) {
    searchParams.set('fields', fields)
  }
  if (codes) {
    searchParams.set('codes', codes)
  }

  return searchParams.toString() ? `${path}?${searchParams.toString()}` : path
}
