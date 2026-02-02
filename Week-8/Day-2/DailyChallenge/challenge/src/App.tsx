
import './App.css'
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import type {FormDataType} from "./form.tsx"

import {Form} from "./form.tsx";

export function App() {
    const [formState, setFormState] = useState<FormDataType>({
        firstName: "",
        lastName: "",
        age: 0,
        gender: "male",
        destination: "",
        nutsFree: false,
        lactoseFree: false,
        vegan: false
    });

    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
      const type = event.target.type
      const name  = event.target.name as keyof FormDataType;
      switch (type) {
          case 'checkbox':
              const valueBoolean: boolean = event.target.checked;
              changeState(name, valueBoolean);
              break;
          case 'number':
              const valueNum: number = Number(event.target.value);
              changeState(name, valueNum);
              break;
          default:
              const valueString: string = event.target.value;
              changeState(name, valueString);
              break;
      }
  }

    function changeState<K extends keyof FormDataType>(
        inputName: K,
        inputValue: FormDataType[K]
    ) {
      setFormState((prevState: FormDataType) => {
          return  { ...prevState, [inputName]: inputValue };
      })
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const urlBase = "http://localhost:3000/";
      const newFormState: Record<string, string> = {};
      for (const [key, value] of Object.entries(formState)) {
          if (value === true) {
              newFormState[key] = "on";
          } else if (value === false) {
              newFormState[key] = "off";
          } else if (typeof value === "number") {
              newFormState[key] = String(value);
          } else {
              newFormState[key] = value;
          }
      }
      const searchParams = new URLSearchParams(newFormState);
      window.location.href = `${urlBase}?${searchParams}`;
  }

  return (
        <Form data={formState} handleChange={handleChange} handleSubmit={handleSubmit}/>
  )
}

