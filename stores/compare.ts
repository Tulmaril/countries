import { useCountryStoreLogic } from '@/composables/useCountryStoreLogic'
import { defineStore } from 'pinia'

export const useCompareStore = defineStore('compare', () =>
  useCountryStoreLogic('compare-codes')
)
