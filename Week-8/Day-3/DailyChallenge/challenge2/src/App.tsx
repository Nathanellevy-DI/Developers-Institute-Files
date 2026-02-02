import { countries } from "./export.ts";
import type { ChangeEvent } from "react";
import  {useState} from "react";

type SuggestionType = {
    suggestions: string[],
    text: string
}

export function App() {
    const [suggestionState, setSuggestionState] = useState<SuggestionType>({
       suggestions: [],
       text: "",
    });

    const { suggestions, text } = suggestionState;

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        if (value === "") {
            setSuggestionState({ suggestions: [], text: "" })
        } else {
            setSuggestionState({
                suggestions: countries.filter((country) => country.toLowerCase().includes(value.toLowerCase())),
                text: value,
            })
        }
    }
  return (
      <>
          <h1>Auto Completed</h1>
          <input type='text' name='country' onChange={handleChange} value={text} />
          <>
              {suggestions.map((country) => (
                  <p key={country}>{country}</p>
              ))}
          </>
          <p>Suggestions: {suggestions.length}</p>
      </>
  )
}

