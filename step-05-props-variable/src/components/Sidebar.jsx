function Sidebar({ currentPage, displayVar }) {
  return (
    <aside className="sidebar">
      <p><strong>Trang:</strong> {currentPage}</p>
      <button className={currentPage === 'home' ? 'active' : ''}>Home</button>
      <button className={currentPage === 'tasks' ? 'active' : ''}>Tasks</button>
      <button className={currentPage === 'about' ? 'active' : ''}>About</button>
      <div>{displayVar}</div>
    </aside>
  )
}
export default Sidebar
