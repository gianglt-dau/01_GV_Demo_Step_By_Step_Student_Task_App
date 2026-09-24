# Bộ demo từng bước — Bài 5 ReactJS với Vite

Bài toán dùng khi giảng: **Student Task App**.

Mỗi thư mục là một checkpoint độc lập, có thể `npm install` rồi `npm run dev`.

## Thứ tự dùng khi giảng

00. **Vite tối thiểu** — Project chạy, nhìn luồng index.html → main.jsx → App.jsx
01. **Giao diện tĩnh** — Dùng JSX + Flexbox, chưa tách Component
02. **Tách Component** — Header, Sidebar, import/export, component tree
03. **Page Components** — HomePage / TasksPage / AboutPage, chuẩn bị bài toán State
04. **State & render theo State** — page/setPage, conditional rendering
05. **Truyền biến qua Props** — App.page → Sidebar.currentPage
06. **Truyền hàm + Event** — onChangePage={setPage}, onClick, child → parent
07. **Danh sách với map()** — Array → map() → TaskItem
08. **Spread + thêm Task** — Tạo Array mới, controlled input, setTasks
09. **Hoàn chỉnh** — filter(), delete, conditional rendering, toggle Sidebar

## Gợi ý thao tác trên lớp
- Không mở ngay step cuối. Bắt đầu từ step hiện tại, giải thích nhu cầu rồi chuyển sang step kế tiếp.
- Khi chuyển step, cho sinh viên dự đoán file nào sẽ thay đổi.
- Ở Props: minh họa riêng truyền biến `currentPage={page}` và truyền hàm `onChangePage={setPage}`.
- Ở Spread: viết 2 dòng `const newTasks = [...tasks, newTask]` và `setTasks(newTasks)` trước khi rút gọn.
- Không đưa React Router vào demo này; điều hướng được giữ đơn giản bằng State `page`.