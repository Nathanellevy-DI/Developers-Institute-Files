import './App.css'
import Exercise1 from './components/Exercise1'
import Exercise2 from './components/Exercise2'
import Exercise3 from './components/Exercise3'

function App() {
  return (
    <div className="App">
      <div style={{ 
        borderBottom: '3px solid #ccc', 
        paddingBottom: '30px', 
        marginBottom: '30px' 
      }}>
        <Exercise1 />
      </div>

      <div style={{ 
        borderBottom: '3px solid #ccc', 
        paddingBottom: '30px', 
        marginBottom: '30px' 
      }}>
        <Exercise2 />
      </div>

      <div>
        <Exercise3 />
      </div>
    </div>
  )
}

export default App