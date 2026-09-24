import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Student Task App</h1>
      </header>

      <div className="content">
        <aside className="sidebar">
          <button>Home</button>
          <button>Tasks</button>
          <button>About</button>
        </aside>

        <main className="main">
          <h2>Home</h2>
          <p>Chào mừng đến Student Task App.</p>
        </main>
      </div>
    </div>
  )
}

export default App
