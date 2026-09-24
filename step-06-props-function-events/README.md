# Step 06 — Truyền hàm qua Props + Event
App truyền:
```jsx
<Sidebar currentPage={page} onChangePage={setPage} />
```

Sidebar gọi:
```jsx
onClick={() => onChangePage('tasks')}
```

Luồng:
`click → onChangePage('tasks') → setPage('tasks') → State đổi → UI render lại`.
