<script setup lang="ts">
defineProps({
  header: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  titileClasses: String
});
</script>

<template>
  <div>
    <h4 v-if="header" class="font-bold mb-6 text-primary">
      {{ header }}
    </h4>
    <div class="space-y-10">
      <h2 class="heading1  " :class=" titileClasses ">
        <WrapBalancer>
          {{ title }}
        </WrapBalancer>
      </h2>
    </div>
  </div>
</template>

<style scoped></style>
