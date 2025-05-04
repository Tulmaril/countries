<template>
  <ClientOnly>
    <button @click.prevent="toggleCompare" class="btn">
      {{ isCompared ? 'Remove from Compare' : 'Add to Compare' }}
    </button>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useCompareStore } from '@/stores/compare'

const props = defineProps<{
  code: string
}>()

const store = useCompareStore()

const isCompared = computed(() => store.codes.includes(props.code))

function toggleCompare() {
  if (isCompared.value) {
    store.remove(props.code)
  } else {
    store.add(props.code)
  }
}
</script>
