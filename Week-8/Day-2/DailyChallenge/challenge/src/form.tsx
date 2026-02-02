import type { ChangeEvent, FormEvent } from "react";

export type FormDataType = {
    firstName: string;
    lastName: string;
    age: number;
    gender: "male" | "female";
    destination: "" | "Thailand" | "Japan" | "Brazil",
    nutsFree: boolean;
    lactoseFree: boolean;
    vegan: boolean;
}

type FormProps = {
    data: FormDataType;
    handleChange: (event: ChangeEvent<
        HTMLInputElement | HTMLSelectElement
    >) => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function Form(props: FormProps) {
    const { data, handleChange, handleSubmit } = props;
    const { firstName, lastName, age, gender, destination, nutsFree, lactoseFree, vegan } = data;
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                />
            <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                />
            <input
                type="number"
                name="age"
                value={age}
                onChange={handleChange}
            />
            <label>
            <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={handleChange}
                />male
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={handleChange}
                />female
            </label>
            <label htmlFor="destination">Destination</label>
            <select id="destination" name="destination" value={destination} onChange={handleChange}>
                <option value="" disabled={true}>-- Please choose a destination --</option>
                <option value="Thailand">Thailand</option>
                <option value="Japan">Japan</option>
                <option value="Brazil">Brazil</option>
            </select>
            <label>Dietary restrictions</label>
            <label>
                <input
                    type="checkbox"
                    checked={nutsFree}
                    onChange={handleChange}
                    name="nutsFree" />Nuts free
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={lactoseFree}
                    onChange={handleChange}
                    name="lactoseFree" />Lactose free
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={vegan}
                    onChange={handleChange}
                    name="vegan" />Vegan
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}