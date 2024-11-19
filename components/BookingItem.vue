<template>
  <li class="p-2 bg-gray-50 rounded">
    <div>User: {{ booking.user }}</div>
    <div>Parc: {{ booking.parc }}</div>
    <div class="text-sm text-gray-600">
      Booked: {{ formatDate(booking.bookingdate) }}
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  booking: Booking
}>()

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}
</script>
