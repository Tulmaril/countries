export default defineNuxtPlugin(() => {
  const compareStore = useCompareStore()
  compareStore.loadFromStorage()
})
