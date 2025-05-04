export default defineNuxtPlugin(() => {
  const historyStore = useHistoryStore()
  historyStore.loadFromStorage()
})
