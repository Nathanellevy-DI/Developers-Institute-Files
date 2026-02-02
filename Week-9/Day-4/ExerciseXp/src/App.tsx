import { Provider } from 'react-redux';
import { store } from './store/store';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="app-container">
          <header className="app-header">
            <h1>✓ Todo List</h1>
            <p className="subtitle">React-Redux with Redux Toolkit</p>
          </header>

          <main className="app-main">
            <AddTodo />
            <TodoList />
          </main>

          <footer className="app-footer">
            <p>Week 9 - Day 4 | Exercise XP</p>
          </footer>
        </div>
      </div>
    </Provider>
  );
}

export default App;
