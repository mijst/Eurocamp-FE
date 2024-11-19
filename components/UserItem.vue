<template>
  <li class="p-2 bg-gray-50 rounded">
    {{ user.name }} - {{ user.email }}
  </li>
</template>

<script setup lang="ts">
defineProps<{
  user: User
}>()
</script>
