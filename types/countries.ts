export type CountryTranslations = {
  [key: string]: {
    official: string
    common: string
  }
}

export type CountryDemonyms = {
  [key: string]: {
    f: string
    m: string
  }
}

export type CountryCurrencies = {
  [key: string]: {
    symbol: string
    name: string
  }
}

export type CountriesFilters = {
  key: string
  value: string
}

export type Country = {
  name: {
    common: string
    official: string
    nativeName: {
      [key: string]: {
        official: string
        common: string
      }
    }
  }
  tld: string[]
  cca2: string
  ccn3: string
  cioc: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: CountryCurrencies
  idd: {
    root: string
    suffixes: string[]
  }
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: { [key: string]: string }
  latlng: number[]
  landlocked: boolean
  borders: string[]
  area: number
  demonyms: CountryDemonyms
  cca3: string
  translations: CountryTranslations
  flag: string
  maps: {
    googleMaps: string
    openStreetMaps: string
  }
  population: number
  gini: { [year: number]: number }
  fifa: string
  car: {
    signs: string[]
    side: string
  }
  timezones: string[]
  continents: string[]
  flags: {
    png: string
    svg: string
    alt: string
  }
  coatOfArms: {
    png: string
    svg: string
  }
  startOfWeek: string
  capitalInfo: {
    latlng: number[]
  }
  postalCode: {
    format: string | null
    regex: string | null
  }
}

export type CountryCardPreview = Pick<
  Country,
  'cca3' | 'capital' | 'flag' | 'population' | 'region' | 'currencies' | 'name'
>

export type CountryName = Pick<Country, 'name' | 'cca3'>

export type CountryCardPreviewResponse = CountryCardPreview[]

export type SelectOption = {
  label: string
  value: string
}
