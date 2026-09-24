import { useState } from 'react'

function TasksPage() {
  const [isDemoOn, setIsDemoOn] = useState(false)

  return (
    <section>
      <h2>Tasks</h2>
      <p>Danh sách công việc sẽ đặt ở đây.</p>
      <button onClick={() => setIsDemoOn(!isDemoOn)}>
        {isDemoOn ? 'Tắt demo event nội bộ' : 'Bật demo event nội bộ'}
      </button>
      {isDemoOn && <p>Event nội bộ đã được kích hoạt.</p>}
    </section>
  )
}
export default TasksPage