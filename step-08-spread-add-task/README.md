# Step 08 — Spread Syntax + thêm Task
Mục tiêu:
```js
const newTasks = [...tasks, newTask]
setTasks(newTasks)
```

Nhấn mạnh:
- `...` là Spread Syntax của JavaScript.
- `[...]` tạo Array mới.
- Không cập nhật State bằng `tasks.push(newTask)`.
- Có thể minh họa thêm Object: `{ ...student, age: 21 }`.
