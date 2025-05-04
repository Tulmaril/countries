<template>
  <input class="filters__search" :value="modelValue" @input="onInput" />
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const emitDebounced = useDebounceFn((value: string) => {
  emit('update:modelValue', value)
}, 400)

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emitDebounced(target.value)
}
</script>
