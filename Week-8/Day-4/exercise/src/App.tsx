import type {ChangeEvent} from 'react';
import { useRef, useState } from 'react';
import './App.css'

function App() {
    const count = useRef<number>(0);
    const [userInput, setUserInput] = useState('');

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setUserInput(event.target.value);
        const value = event.target.value;
        count.current = value.length
    }

  return (
    <>
        <input type='text' name='user-input' value={userInput} onChange = {handleChange}/>
        <p>count: {count.current}</p>
    </>
  )
}

export default App
