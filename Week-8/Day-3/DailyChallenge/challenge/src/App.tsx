import axios from 'axios';
import './App.css'
import {useState} from "react";
import type {ChangeEvent, FormEvent} from "react";


export function App() {
    const [ inputMessage, setInputMessage ] = useState<string>('');
    const [ responseMessage, setResponseMessage ] = useState<string>('');

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setInputMessage(value);
        console.log(inputMessage);
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const url = "http://localhost:5050/api/world"
        const body = { message: inputMessage };
        console.log(body);
        try {
            const response = await axios.post(url, body);
            setResponseMessage(response.data.message)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="input-message">Enter your message</label>
            <input
                type="text"
                id="input-message"
                name="input-message"
                placeholder="Enter your message"
                value={ inputMessage }
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
            {responseMessage && <p>{responseMessage}</p>}
        </>
    )
}

