import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import TasksPage from './pages/TasksPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="main">
          <HomePage />
          {/* TasksPage và AboutPage đã có nhưng chưa chọn động */}
        </main>
      </div>
    </div>
  )
}
export default App
