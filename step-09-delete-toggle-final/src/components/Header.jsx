function Header({ showSidebar, onToggleSidebar, menuTop, onToggleMenu }) {
  return (
    <header className="header">
      <h1>Student Task App</h1>
      <div className="header-actions">
        <button className="toggle-layout" onClick={onToggleMenu}>
          {menuTop ? 'Chuyển menu sang Sidebar' : 'Chuyển menu sang Top'}
        </button>
        <button onClick={onToggleSidebar}>
          {showSidebar ? 'Ẩn Sidebar' : 'Hiện Sidebar'}
        </button>
      </div>
    </header>
  )
}
export default Header