import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import axios from 'axios';


type StateTypeTwo = {
    userID: string,
    title: string,
    body: string,
}


export function FormNew() {
    const [ formState, setFormState ] = useState<StateTypeTwo>({
        userID: "",
        title: "",
        body: "",
    });

    function handleChange (event: ChangeEvent<HTMLInputElement>) {
        const name = event.target.name;
        setFormState({ ...formState, [name]: event.target.value });
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const url = "https://jsonplaceholder.typicode.com/posts"
        try {
            const response = await axios.post(url, formState)
            console.log(response.data);
            console.log(formState)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userID"></label>
                <input id="userID" type="text" name="userID" onChange={handleChange} />
                <label htmlFor="title"></label>
                <input id="title" type="text" name="title" onChange={handleChange} />
                <label htmlFor="body"></label>
                <input id="body" type="text" name="body" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}