// composables/useApi.ts
import { ref } from 'vue'
import { useFetch } from '#imports'
import type { User, Parc, Booking } from '~/types/api'

export const useApi = () => {
  const users = ref<User[]>([])
  const parcs = ref<Parc[]>([])
  const bookings = ref<Booking[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  const fetchWithRetry = async <T>(url: string, retries = 3): Promise<T[]> => {
    for (let i = 0; i < retries; i++) {
      try {
        const { data: response } = await useFetch(url)
        
        // If we got a valid response with data
        if (response.value?.data) {
          return response.value.data
        }
        
        // If this isn't our last try, wait before retrying
        if (i < retries - 1) {
          await new Promise(resolve => setTimeout(resolve, 1000))
          continue
        }
      } catch (err) {
        // If this is our last try, throw the error
        if (i === retries - 1) throw err
      }
    }
    return []  // Return empty array if all retries failed
  }

  const fetchAllData = async () => {
    try {
      loading.value = true
      error.value = null

      const [userData, parcData, bookingData] = await Promise.all([
        fetchWithRetry<User>('http://localhost:3001/api/1/users'),
        fetchWithRetry<Parc>('http://localhost:3001/api/1/parcs'),
        fetchWithRetry<Booking>('http://localhost:3001/api/1/bookings')
      ])

      users.value = userData
      parcs.value = parcData
      bookings.value = bookingData

    } catch (err) {
      console.error('API Error:', err)
      error.value = err instanceof Error ? err.message : 'An unexpected error occurred'
    } finally {
      loading.value = false
    }
  }

  return {
    users,
    parcs,
    bookings,
    loading,
    error,
    fetchAllData
  }
}
