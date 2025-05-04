<template>
  <div v-show="themeIsLoaded">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useDark } from '@vueuse/core'

const themeIsLoaded = ref()
const isDark = useDark()
useHead({
  htmlAttrs: computed(() => ({
    class: isDark.value ? 'dark' : '',
  })),
})

onMounted(() => {
  themeIsLoaded.value = localStorage.getItem('vueuse-color-scheme')
})
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.2rem);
}
</style>
