<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
defineProps({
  error: {
    type: String,
    default: '',
  },
})
const modelValue = defineModel({ type: String })
</script>

<template>
  <div class="w-full">
    <uiInput v-model="modelValue" placeholder="Name" name="name" v-bind="$attrs" />
    <span class="text-destructive text-sm">{{ error }}</span>
  </div>
</template>

<style scoped>
input {
  @apply bg-dark border-0 py-6 px-4 bg-[#302C2D];
}
</style>
