import ProgressStats from './components/ProgressStats'
import CategorySelector from './components/CategorySelector'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">⚡ Productivity Tracker</h1>
        <p className="app-subtitle">Track your daily tasks and stay productive</p>
      </header>

      <main className="app-content">
        <ProgressStats />
        <CategorySelector />
        <AddTask />
        <TaskList />
      </main>
    </div>
  )
}

export default App
