<template>
  <header class="header">
    <nav class="header__nav">
      <NuxtLink to="/" class="header__logo">Countries</NuxtLink>

      <button class="header__burger" @click="menuOpen = !menuOpen">☰</button>

      <div class="header__links" :class="{ open: menuOpen }">
        <NuxtLink to="/history" class="header__link" @click="closeMenu"
          >🕘 History
        </NuxtLink>
        <NuxtLink to="/favorites" class="header__link" @click="closeMenu"
          >⭐ Favorites
          <ClientOnly>
            <span v-if="favoritesStore.count"
              >({{ favoritesStore.count }})</span
            >
          </ClientOnly>
        </NuxtLink>
        <NuxtLink to="/compare" class="header__link" @click="closeMenu"
          >🔀 Compare
          <ClientOnly>
            <span v-if="compareStore.count">({{ compareStore.count }})</span>
          </ClientOnly>
        </NuxtLink>
        <ClientOnly><ThemeToggle /></ClientOnly>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useCompareStore } from '@/stores/compare'
import { useFavoritesStore } from '@/stores/favorites'

const compareStore = useCompareStore()
const favoritesStore = useFavoritesStore()

const menuOpen = ref(false)
const closeMenu = () => {
  menuOpen.value = false
}
</script>
