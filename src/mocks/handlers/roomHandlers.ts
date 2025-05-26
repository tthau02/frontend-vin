import { http, HttpResponse } from 'msw'

// Định nghĩa interface cho Room
export interface Room {
  id: string
  name: string
  price: string
  nights: number
  rating: number
  image: string
  isFavorite: boolean
}

// Mock data cho rooms
let rooms: Room[] = [
  { id: '1', name: 'Căn hộ tại Văn Giang', price: '₫1.130.739', nights: 2, rating: 5.0, image: 'https://picsum.photos/300/200?random=1', isFavorite: false },
  { id: '2', name: 'Căn hộ tại Văn Giang', price: '₫1.261.022', nights: 2, rating: 5.0, image: 'https://picsum.photos/300/200?random=2', isFavorite: false },
  { id: '3', name: 'Căn hộ tại tt. Văn Giang', price: '₫1.531.460', nights: 2, rating: 5.0, image: 'https://picsum.photos/300/200?random=3', isFavorite: false },
  { id: '4', name: 'Căn hộ chung cư cao cấp tại Văn Giang', price: '₫1.300.600', nights: 2, rating: 4.88, image: 'https://picsum.photos/300/200?random=4', isFavorite: false },
  { id: '5', name: 'Căn hộ tại Xuân Quan', price: '₫1.478.493', nights: 2, rating: 5.0, image: 'https://picsum.photos/300/200?random=5', isFavorite: false },
  { id: '6', name: 'Căn hộ tại Văn Giang', price: '₫1.261.644', nights: 2, rating: 4.94, image: 'https://picsum.photos/300/200?random=6', isFavorite: false },
  { id: '7', name: 'Phòng tại Văn Giang', price: '₫1.474.401', nights: 2, rating: 5.0, image: 'https://picsum.photos/300/200?random=7', isFavorite: false },
  { id: '8', name: 'Căn hộ tại Thành phố Hồ Chí Minh', price: '₫884.412', nights: 2, rating: 5.0, image: 'https://picsum.photos/300/200?random=8', isFavorite: false },
  { id: '9', name: 'Phòng tại Đa Kao', price: '₫113.783', nights: 2, rating: 5.0, image: 'https://picsum.photos/300/200?random=9', isFavorite: false },
  { id: '10', name: 'Căn hộ khách sạn tại Nguyễn Cư Trinh', price: '₫836.164', nights: 2, rating: 5.0, image: 'https://picsum.photos/300/200?random=10', isFavorite: false },
  { id: '11', name: 'Phòng tại Thành phố Hồ Chí Minh', price: '₫1.304.308', nights: 2, rating: 5.0, image: 'https://picsum.photos/300/200?random=11', isFavorite: false },
  { id: '12', name: 'Phòng tại Thành phố Hồ Chí Minh', price: '₫1.538.629', nights: 2, rating: 4.85, image: 'https://picsum.photos/300/200?random=12', isFavorite: false },
  { id: '13', name: 'Phòng tại Thành phố Hồ Chí Minh', price: '₫1.024.777', nights: 2, rating: 4.92, image: 'https://picsum.photos/300/200?random=13', isFavorite: false },
  { id: '14', name: 'Căn hộ tại Thành phố Hồ Chí Minh', price: '₫1.025.925', nights: 2, rating: 4.81, image: 'https://picsum.photos/300/200?random=14', isFavorite: false },
]

// Payload khi tạo hoặc cập nhật room
interface RoomPayload {
  name: string
  price: string
  nights: number
  rating: number
  image: string
  isFavorite: boolean
}

export const roomHandlers = [
  // Lấy danh sách tất cả rooms
  http.get('/rooms', () => {
    return HttpResponse.json(rooms)
  }),

  // Tạo mới room
  http.post('/rooms', async ({ request }) => {
    const data = (await request.json()) as RoomPayload
    const newRoom: Room = { id: Date.now().toString(), ...data }
    rooms.push(newRoom)
    return HttpResponse.json(newRoom, { status: 201 })
  }),

  // Cập nhật room theo id
  http.put('/rooms/:id', async ({ request, params: { id } }) => {
    const data = (await request.json()) as Partial<RoomPayload>
    rooms = rooms.map(room =>
      room.id === id ? { ...room, ...data } : room
    )
    const updated = rooms.find(room => room.id === id)
    return HttpResponse.json(updated)
  }),

  // Xóa room theo id
  http.delete('/rooms/:id', ({ params: { id } }) => {
    rooms = rooms.filter(room => room.id !== id)
    return new HttpResponse(null, { status: 204 })
  }),
]
