import { useState } from 'react'
import TaskItem from './TaskItem'

function TasksPage() {
  const [text, setText] = useState('')
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Học HTML', completed: false },
    { id: 2, title: 'Học JavaScript', completed: false },
    { id: 3, title: 'Học React', completed: false },
  ])
  const [filter, setFilter] = useState('all')
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  function addTask() {
    if (!text.trim()) return
    const newTask = { id: Date.now(), title: text.trim(), completed: false }
    setTasks([...tasks, newTask])
    setText('')
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  function toggleTask(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  function deleteCompleted() {
    setTasks(tasks.filter(task => !task.completed))
  }

  function startEdit(task) {
    setEditId(task.id)
    setEditText(task.title)
  }

  function saveEdit() {
    setTasks(tasks.map(task =>
      task.id === editId ? { ...task, title: editText.trim() || task.title } : task
    ))
    setEditId(null)
  }

  const doneCount = tasks.filter(task => task.completed).length

  const visibleTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'done') return task.completed
    return true
  })

  return (
    <section>
      <h2>Tasks</h2>
      <div className="task-form">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Nhập công việc..."
        />
        <button onClick={addTask}>Thêm</button>
      </div>

      <div className="card">
        <div className="task-stats">
          <span>Đã xong: {doneCount} / {tasks.length}</span>
          <button onClick={deleteCompleted} disabled={doneCount === 0}>
            Xóa đã hoàn thành
          </button>
        </div>

        <div className="task-filters">
          <button
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            Tất cả
          </button>
          <button
            className={filter === 'active' ? 'active' : ''}
            onClick={() => setFilter('active')}
          >
            Đang làm
          </button>
          <button
            className={filter === 'done' ? 'active' : ''}
            onClick={() => setFilter('done')}
          >
            Đã xong
          </button>
        </div>

        {visibleTasks.length === 0 && <p>Chưa có công việc.</p>}
        {visibleTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onStartEdit={startEdit}
            isEditing={editId === task.id}
            editText={editText}
            onEditChange={(e) => setEditText(e.target.value)}
            onSave={saveEdit}
            onCancel={() => setEditId(null)}
          />
        ))}
      </div>
    </section>
  )
}
export default TasksPage