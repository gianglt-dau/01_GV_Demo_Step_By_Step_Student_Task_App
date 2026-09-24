import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav'
import HomePage from './pages/HomePage'
import TasksPage from './pages/tasks/TasksPage'
import AboutPage from './pages/AboutPage'

function App() {
  const [page, setPage] = useState('home')
  const [showSidebar, setShowSidebar] = useState(true)
  const [menuTop, setMenuTop] = useState(false)

  function renderPage() {
    if (page === 'home') return <HomePage />
    if (page === 'tasks') return <TasksPage />
    return <AboutPage />
  }

  return (
    <div className={`app ${menuTop ? 'layout-top' : 'layout-sidebar'}`}>
      <Header
        showSidebar={showSidebar}
        onToggleSidebar={() => setShowSidebar(!showSidebar)}
        menuTop={menuTop}
        onToggleMenu={() => setMenuTop(!menuTop)}
      />
      <TopNav
        currentPage={page}
        onChangePage={setPage}
      />
      <div className="content">
        {showSidebar && (
          <Sidebar
            currentPage={page}
            onChangePage={setPage}
          />
        )}
        <main className="main">{renderPage()}</main>
      </div>
    </div>
  )
}
export default App