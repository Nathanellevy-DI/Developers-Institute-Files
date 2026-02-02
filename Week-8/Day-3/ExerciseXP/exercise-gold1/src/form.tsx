import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

type StateType = {
    username: string,
    email: string,
}


export function Form() {
    const [ formState, setFormState ] = useState<StateType>({
        username: "",
        email: "",
    });

    function handleChange (event: ChangeEvent<HTMLInputElement>) {
        const name = event.target.name;
        setFormState({ ...formState, [name]: event.target.value });
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const url = "https://jsonplaceholder.typicode.com/posts"
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(formState),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const data = await response.json();
            console.log(data);
            console.log(formState)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username"></label>
            <input id="username" type="text" name="username" onChange={handleChange} />
            <label htmlFor="email"></label>
            <input id="email" type="email" name="email" onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}