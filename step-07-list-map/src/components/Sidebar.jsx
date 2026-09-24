function Sidebar({ currentPage, onChangePage }) {
  return (
    <aside className="sidebar">
      <p><strong>Trang:</strong> {currentPage}</p>

      <button
        className={currentPage === 'home' ? 'active' : ''}
        onClick={() => onChangePage('home')}
      >
        Home
      </button>

      <button
        className={currentPage === 'tasks' ? 'active' : ''}
        onClick={() => onChangePage('tasks')}
      >
        Tasks
      </button>

      <button
        className={currentPage === 'about' ? 'active' : ''}
        onClick={() => onChangePage('about')}
      >
        About
      </button>
    </aside>
  )
}
export default Sidebar
