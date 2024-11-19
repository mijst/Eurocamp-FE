<template>
  <div class="p-4">
    <div v-if="loading" class="text-center">
      Loading...
    </div>

    <div v-else-if="error" class="p-4 text-red-600">
      <h2>Error:</h2>
      <p>{{ error }}</p>
      <button 
        class="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        @click="fetchAllData"
      >
        Retry
      </button>
    </div>

    <div v-else>
      <h1 class="text-2xl font-bold mb-4">Eurocamp Dashboard</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="border p-4 rounded">
          <h2 class="text-xl font-semibold mb-2">Users ({{ users.length }})</h2>
          <ul class="space-y-2">
            <li v-for="user in users" 
                :key="user.id" 
                class="p-2 bg-gray-50 rounded">
              {{ user.name }} - {{ user.email }}
            </li>
          </ul>
        </div>

        <div class="border p-4 rounded">
          <h2 class="text-xl font-semibold mb-2">Parcs ({{ parcs.length }})</h2>
          <ul class="space-y-2">
            <li v-for="parc in parcs" 
                :key="parc.id" 
                class="p-2 bg-gray-50 rounded">
              <div class="font-medium">{{ parc.name }}</div>
              <div class="text-sm text-gray-600">{{ parc.description }}</div>
            </li>
          </ul>
        </div>

        <div class="border p-4 rounded">
          <h2 class="text-xl font-semibold mb-2">Bookings ({{ bookings.length }})</h2>
          <ul class="space-y-2">
            <li v-for="booking in bookings" 
                :key="booking.id" 
                class="p-2 bg-gray-50 rounded">
              <div>User: {{ booking.user }}</div>
              <div>Parc: {{ booking.parc }}</div>
              <div class="text-sm text-gray-600">
                Booked: {{ new Date(booking.bookingdate).toLocaleDateString() }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { users, parcs, bookings, loading, error, fetchAllData } = useApi()

onMounted(() => {
  fetchAllData()
})
</script>
