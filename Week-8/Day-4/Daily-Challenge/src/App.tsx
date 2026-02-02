import { TaskProvider } from './context/TaskContext';
import { AddTask } from './components/AddTask';
import { TaskFilter } from './components/TaskFilter';
import { TaskList } from './components/TaskList';
import './App.css';

function App() {
  return (
    <TaskProvider>
      <div className="app">
        <div className="app-container">
          <header className="app-header">
            <h1>📝 Enhanced Task Manager</h1>
            <p className="subtitle">
              Built with useContext, useReducer & useRef
            </p>
          </header>

          <main className="app-main">
            <AddTask />
            <TaskFilter />
            <TaskList />
          </main>

          <footer className="app-footer">
            <p>Daily Challenge - Week 8, Day 4</p>
          </footer>
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
