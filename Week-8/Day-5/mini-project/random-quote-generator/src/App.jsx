// Import React and the useState hook for managing state
import React, { useState } from 'react';
import './App.css';
// Import the quotes array from our database file
import quotes from './QuotesDatabase';


function App() {


  // State to store the current quote object {quote: "...", author: "..."}
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  
  // State to store the array of quotes we haven't shown yet
  const [remainingQuotes, setRemainingQuotes] = useState(quotes.slice(1));
  
  // State to store the current background color
  const [backgroundColor, setBackgroundColor] = useState('#3498db');
  
  // Function to generate a random color in hexadecimal format
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    // Loop 6 times to create a 6-digit hex color code
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Function to generate a new random quote
  const generateNewQuote = () => {
    // Check if we have any remaining quotes
    if (remainingQuotes.length === 0) {
      // If no quotes left, reset the array (exclude current quote to avoid immediate repeat)
      const resetQuotes = quotes.filter(q => q.quote !== currentQuote.quote);
      setRemainingQuotes(resetQuotes.slice(1));
      setCurrentQuote(resetQuotes[0]);
    } else {
      // Pick a random quote from remaining quotes
      const randomIndex = Math.floor(Math.random() * remainingQuotes.length);
      const newQuote = remainingQuotes[randomIndex];
      
      // Update current quote
      setCurrentQuote(newQuote);
      
      // Remove the selected quote from remaining quotes
      const updatedRemaining = remainingQuotes.filter((q, index) => index !== randomIndex);
      setRemainingQuotes(updatedRemaining);
    }
    
    // Generate a new random background color
    setBackgroundColor(getRandomColor());
  };



  // This will hold our state and functions - we'll add them next!
  

  return (

    <div 
      className="app-container" 
      style={{ backgroundColor: backgroundColor }}
    >
      {/* Main quote box container */}
      <div className="quote-box">
        
        {/* Display the quote text as a header */}
        <h1 
          className="quote-text" 
          style={{ color: backgroundColor }}
        >
          "{currentQuote.quote}"
        </h1>
        
        {/* Display the author name */}
        <p 
          className="author-text" 
          style={{ color: backgroundColor }}
        >
          - {currentQuote.author || "Unknown"}
        </p>
        
        {/* Button to generate new quote */}
        <button 
          className="new-quote-btn" 
          style={{ backgroundColor: backgroundColor }}
          onClick={generateNewQuote}
        >
          New Quote 
        </button>
        
      </div>
    </div>
  );
  
}

export default App;



