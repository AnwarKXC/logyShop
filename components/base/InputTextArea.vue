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
    <UiTextarea
      v-model="modelValue" class="bg-[#302C2D] border-[#302C2D] w-full" v-bind="$attrs"
    />
    <span class="text-destructive text-sm">{{ error }}</span>
  </div>
</template>

<style scoped>

</style>
