import { Provider } from 'react-redux';
import { store } from './store/store';
import { UserData } from './components/UserData';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="app-container">
          <header className="app-header">
            <h1>👤 User Data Fetcher</h1>
            <p className="subtitle">Redux Thunk with Async API Calls</p>
          </header>

          <main className="app-main">
            <UserData />
          </main>

          <footer className="app-footer">
            <p>Week 10 - Day 2 | Exercise XP</p>
          </footer>
        </div>
      </div>
    </Provider>
  );
}

export default App;
