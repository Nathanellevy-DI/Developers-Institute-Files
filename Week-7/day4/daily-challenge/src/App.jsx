import { useState } from 'react'
import './App.css'

function App() {
  // Initialize state to store programming languages and their vote counts
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  // Handle voting logic by increasing the vote count of the selected language
  const vote = (index) => {
    // Create a shallow copy of the languages array to keep state immutable
    const newLanguages = [...languages];

    // Increment the vote count for the selected language
    newLanguages[index].votes += 1;

    // Update the state with the modified array
    setLanguages(newLanguages);
  };

  return (
    <div>
      <h1>Vote Your Language</h1>

      {/* Render the list of languages with their vote counts */}
      {languages.map((language, index) => (
        <div id='div' key={index}>
          <span>{language.votes}</span>
          <span>{language.name}</span>

          {/* Trigger vote action for the selected language */}
          <button className="button" onClick={() => vote(index)}>
            Click here !
          </button>
        </div>
      ))}
    </div>
  );
}

export default App
