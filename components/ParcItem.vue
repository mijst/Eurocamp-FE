<template>
  <li class="p-2 bg-gray-50 rounded">
    <div class="font-medium">{{ parc.name }}</div>
    <div class="text-sm text-gray-600">{{ parc.description }}</div>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  parc: Parc
}>()
</script>
