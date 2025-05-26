import { http, HttpResponse } from 'msw'

// Định nghĩa interface cho User và payload update
interface User {
  id: string
  name: string
  email: string
  updatedAt?: string
}

interface UserUpdatePayload {
  name?: string
  email?: string
}

let mockUser: User = {
  id: '1',
  name: 'Mock User',
  email: 'mock@example.com',
}

export const userHandlers = [
  // GET /users/me
  http.get('/users/me', () => {
    return HttpResponse.json(mockUser)
  }),

  // PUT /users/me
  http.put('/users/me', async ({ request }) => {
    // Destructure payload và ép kiểu
    const data = (await request.json()) as UserUpdatePayload

    // Cập nhật mockUser với các trường nhận được
    mockUser = {
      ...mockUser,
      ...data,
      updatedAt: new Date().toISOString(),
    }

    return HttpResponse.json(mockUser)
  }),
]
