<template>
  <ClientOnly>
    <button @click.prevent="toggleFavorite" class="favorite-btn">
      <span v-if="isFavorite">★</span>
      <span v-else>☆</span>
    </button>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useFavoritesStore } from '@/stores/favorites'

const props = defineProps<{
  code: string
}>()

const store = useFavoritesStore()

const isFavorite = computed(() => store.codes.includes(props.code))

function toggleFavorite() {
  if (isFavorite.value) {
    store.remove(props.code)
  } else {
    store.add(props.code)
  }
}
</script>
