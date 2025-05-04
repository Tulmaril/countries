import { useCountryStoreLogic } from '@/composables/useCountryStoreLogic'
import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', () =>
  useCountryStoreLogic('favorites-codes')
)
