# Vinaside Frontend

## Công nghệ sử dụng

- React: Thư viện xây dựng giao diện người dùng
- Vite: Công cụ build nhanh, tối ưu cho React
- Shadcn UI: Bộ component UI mạnh mẽ, tích hợp dễ dàng
- React Query (TanStack Query): Quản lý state từ server-side
- TailwindCSS: Framework CSS tiện lợi, hỗ trợ thiết kế giao diện nhanh chóng
- TypeScript: Tăng cường khả năng phát hiện lỗi, dễ bảo trì

## Cấu trúc thư mục

```
src/
│
├── assets/                    # Chứa hình ảnh, font, icon...
│
├── components/                # Chứa các thành phần giao diện
│   ├── ui/                    # Components của Shadcn UI
│   └── common/                # Components dùng chung (Button, Modal...)
│
├── context/                   # Context API sử dụng với useContext
│
├── hooks/                     # Custom hooks
│
├── layouts/                   # Layout của ứng dụng (MainLayout, AuthLayout)
│
├── pages/                     # Các page của ứng dụng
│
├── reducers/                  # Chứa các reducer cho useReducer
│
├── routes/                    # Định nghĩa routing
│
├── services/                  # Gọi API và quản lý dữ liệu từ server
│
├── utils/                     # Các hàm tiện ích
│
```

## Cài đặt và sử dụng

1. Cài đặt dependencies:

```bash
npm install
```

2. Chạy project ở môi trường development:

```bash
npm run dev
```

3. Build project cho môi trường production:

```bash
npm run build
```

4. Preview trước khi deploy:

```bash
npm run preview
```
