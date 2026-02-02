import { useState } from "react";
import "./App.css";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const addVote = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].votes += 1;
    setLanguages(updatedLanguages);
  };

  return (
    <div className="App">
      <h1>Vote Your Language</h1>

      {languages.map((language, index) => (
        <div key={index} className="language-row">
          <span>{language.name}</span>
          <span>{language.votes}</span>
          <button onClick={() => addVote(index)}>Vote</button>
        </div>
      ))}
    </div>
  );
}

export default App;
