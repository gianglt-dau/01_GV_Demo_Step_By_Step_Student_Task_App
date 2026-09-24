import { useState } from 'react'

function TaskItem({ title }) {
  return <div className="task-item"><span>{title}</span></div>
}

function TasksPage() {
  const [text, setText] = useState('')
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Học HTML' },
    { id: 2, title: 'Học JavaScript' },
  ])

  const [textConcat, setTextConcat] = useState('')
  const [tasksConcat, setTasksConcat] = useState([
    { id: 1, title: 'Học HTML' },
    { id: 2, title: 'Học JavaScript' },
  ])

  function addTask() {
    if (!text.trim()) return

    const newTask = {
      id: Date.now(),
      title: text.trim(),
    }

    const newTasks = [...tasks, newTask]
    setTasks(newTasks)
    setText('')
  }

  function addTaskWithoutSpread() {
    if (!textConcat.trim()) return

    const newTask = {
      id: Date.now() + 1000,
      title: textConcat.trim(),
    }

    const newTasks = tasksConcat.concat(newTask)
    setTasksConcat(newTasks)
    setTextConcat('')
  }

  return (
    <section>
      <h2>Tasks</h2>

      <div className="card block-spread">
        <h3>Cách 1 - Dùng spread (...tasks, newTask)</h3>
        <div className="task-form">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Nhập công việc..."
          />
          <button onClick={addTask}>Thêm</button>
        </div>
        {tasks.map(task => (
          <TaskItem key={task.id} title={task.title} />
        ))}
      </div>

      <div className="card block-concat">
        <h3>Cách 2 - Không dùng spread: concat(newTask)</h3>
        <div className="task-form">
          <input
            value={textConcat}
            onChange={(e) => setTextConcat(e.target.value)}
            placeholder="Nhập công việc..."
          />
          <button onClick={addTaskWithoutSpread}>Thêm</button>
        </div>
        {tasksConcat.map(task => (
          <TaskItem key={task.id} title={task.title} />
        ))}
      </div>
    </section>
  )
}
export default TasksPage
