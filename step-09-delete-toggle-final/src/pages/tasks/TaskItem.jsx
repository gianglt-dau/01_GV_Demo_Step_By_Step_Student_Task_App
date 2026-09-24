function TaskItem({ task, onToggle, onDelete, isEditing, editText, onEditChange, onSave, onCancel, onStartEdit }) {
  return (
    <div className={`task-item ${task.completed ? 'done' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      {isEditing ? (
        <>
          <input
            className="edit-input"
            value={editText}
            onChange={onEditChange}
            onKeyDown={(e) => e.key === 'Enter' && onSave()}
          />
          <span className="task-actions">
            <button onClick={onSave}>Lưu</button>
            <button onClick={onCancel}>Hủy</button>
          </span>
        </>
      ) : (
        <>
          <span className="task-title">{task.title}</span>
          <span className="task-actions">
            <button onClick={() => onStartEdit(task)}>Sửa</button>
            <button onClick={() => onDelete(task.id)}>Xóa</button>
          </span>
        </>
      )}
    </div>
  )
}
export default TaskItem