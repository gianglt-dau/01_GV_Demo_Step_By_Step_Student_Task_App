function TopNav({ currentPage, onChangePage }) {
  return (
    <nav className="topnav">
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
    </nav>
  )
}
export default TopNav