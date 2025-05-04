<template>
  <button class="theme-toggle" @click="toggleTheme()">
    {{ isDark ? '🌙' : '☀️' }}
  </button>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleTheme = useToggle(isDark)
</script>
