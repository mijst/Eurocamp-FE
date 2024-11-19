export interface User {
  id: string
  name: string
  email: string
}

export interface Parc {
  id: string | number
  name: string
  description: string
}

export interface Booking {
  id: string
  user: string
  parc: string
  bookingdate: string
  comments: string
}

export interface ApiResponse<T> {
  data: T[]
}
