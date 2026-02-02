import { Provider } from 'react-redux';
import { store } from './store/store';
import { AgeDisplay } from './components/AgeDisplay';
import { AgeControls } from './components/AgeControls';
import './App.css';

// Step 5: Wrap app with Redux Provider
function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="app-container">
          <header className="app-header">
            <h1>🎂 Age Tracker</h1>
            <p className="subtitle">Redux Toolkit with Async Thunk</p>
          </header>

          <main className="app-main">
            <AgeDisplay />
            <AgeControls />
          </main>

          <footer className="app-footer">
            <p>Week 10 - Day 2 | Daily Challenge</p>
          </footer>
        </div>
      </div>
    </Provider>
  );
}

export default App;
