import { useCountryStoreLogic } from '@/composables/useCountryStoreLogic'
import { defineStore } from 'pinia'

export const useHistoryStore = defineStore('history', () =>
  useCountryStoreLogic('history-codes', { maxLength: 20 })
)
