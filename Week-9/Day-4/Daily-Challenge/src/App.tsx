import { Provider } from 'react-redux';
import { store } from './store/store';
import { Calendar } from './components/Calendar';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="app-container">
          <header className="app-header">
            <h1>📆 Daily Planner</h1>
            <p className="subtitle">Manage your tasks with React-Redux</p>
          </header>

          <main className="app-main">
            <Calendar />
            <AddTask />
            <TaskList />
          </main>

          <footer className="app-footer">
            <p>Week 9 - Day 4 | Daily Challenge</p>
          </footer>
        </div>
      </div>
    </Provider>
  );
}

export default App;
