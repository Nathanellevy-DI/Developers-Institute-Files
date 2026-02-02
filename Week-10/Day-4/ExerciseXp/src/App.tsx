// Exercise 1: Main App component
// This demonstrates the React + TypeScript project setup with Vite

import Greeting from './components/Greeting'
import Counter from './components/Counter'
import UserCard from './components/UserCard'
import UserList from './components/UserList'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>⚛️ React + TypeScript Exercises</h1>
        <p>Learning TypeScript with React using Vite</p>
      </header>

      <main className="exercises-container">
        {/* Exercise 2: Greeting Component with Props */}
        <section className="exercise-section">
          <h2 className="section-title">Exercise 2: Greeting Component</h2>
          <p className="section-description">Props with TypeScript interfaces</p>
          <div className="exercise-content">
            <Greeting name="John Doe" messageCount={5} />
            <Greeting name="Jane Smith" messageCount={0} />
            <Greeting name="Bob" messageCount={1} />
          </div>
        </section>

        {/* Exercise 3: Counter Component with useState */}
        <section className="exercise-section">
          <h2 className="section-title">Exercise 3: Counter Component</h2>
          <p className="section-description">useState Hook with TypeScript</p>
          <div className="exercise-content">
            <Counter />
          </div>
        </section>

        {/* Exercise 4: UserCard Component with Optional Props */}
        <section className="exercise-section">
          <h2 className="section-title">Exercise 4: UserCard Component</h2>
          <p className="section-description">Optional Props with Default Values</p>
          <div className="exercise-content user-cards-grid">
            {/* All props provided */}
            <UserCard name="Alice Johnson" age={28} role="Admin" />
            {/* Some props omitted */}
            <UserCard name="Charlie Brown" role="Developer" />
            {/* Only name provided */}
            <UserCard name="Diana Prince" />
            {/* No props - uses all defaults */}
            <UserCard />
          </div>
        </section>

        {/* Exercise 5: UserList Component with useEffect */}
        <section className="exercise-section">
          <h2 className="section-title">Exercise 5: UserList Component</h2>
          <p className="section-description">useEffect Hook with API Fetching</p>
          <div className="exercise-content">
            <UserList />
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>React + TypeScript + Vite | Week 10 Day 4</p>
      </footer>
    </div>
  )
}

export default App
