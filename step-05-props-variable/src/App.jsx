import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import TasksPage from './pages/TasksPage'
import AboutPage from './pages/AboutPage'

function App() {
  const [page, setPage] = useState('home')

  function renderPage() {
    if (page === 'home') return <HomePage />
    if (page === 'tasks') return <TasksPage />
    return <AboutPage />
  }

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar currentPage={page} displayVar="Sample Variable"/>
        <main className="main">{renderPage()}</main>
      </div>
    </div>
  )
}
export default App
