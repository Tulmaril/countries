export default defineNuxtPlugin(() => {
  const favoritesStore = useFavoritesStore()
  favoritesStore.loadFromStorage()
})
