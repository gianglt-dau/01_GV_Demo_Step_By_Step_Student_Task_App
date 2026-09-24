# Step 05 — Truyền biến qua Props
App có `page`, Sidebar cần đọc giá trị đó.

```jsx
<Sidebar currentPage={page} />
```

Sidebar nhận:
```jsx
function Sidebar({ currentPage }) { ... }
```

Đây là truyền dữ liệu từ cha xuống con. Chưa truyền hàm.
