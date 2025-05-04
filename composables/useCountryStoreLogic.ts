import type { Country } from '~/types/countries'

export function useCountryStoreLogic(
  storageKey: string,
  options?: { maxLength?: number }
) {
  const codes = ref<string[]>([])
  const countries = ref<Country[]>([])

  const setCountries = (data: Country[]) => {
    countries.value = data
  }

  const loadFromStorage = () => {
    if (import.meta.client) {
      const saved = localStorage.getItem(storageKey)
      codes.value = saved ? JSON.parse(saved) : []
    }
  }

  const saveToStorage = () => {
    if (import.meta.client) {
      localStorage.setItem(storageKey, JSON.stringify(codes.value))
    }
  }

  const add = (code: string) => {
    codes.value = codes.value.filter((c) => c !== code)
    codes.value.unshift(code)

    if (options?.maxLength) {
      codes.value = codes.value.slice(0, options.maxLength)
    }
    saveToStorage()
  }

  const remove = (code: string) => {
    codes.value = codes.value.filter((c) => c !== code)
    countries.value = countries.value.filter((country) => country.cca3 !== code)
    saveToStorage()
  }

  const clear = () => {
    codes.value = []
    saveToStorage()
  }

  const count = computed(() => codes.value.length)

  return {
    codes,
    countries,
    count,
    setCountries,
    loadFromStorage,
    saveToStorage,
    add,
    remove,
    clear,
  }
}
