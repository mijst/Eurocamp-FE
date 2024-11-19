<template>
  <div class="border p-4 rounded">
    <h2 class="text-xl font-semibold mb-2">{{ title }} ({{ count }})</h2>
    <ul class="space-y-2">
      <slot name="items" />
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  count: number
}>()
</script>
