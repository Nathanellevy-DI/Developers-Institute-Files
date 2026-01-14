import { StrictMode } from 'react';             // Import StrictMode to highlight potential problems in React
import { createRoot } from 'react-dom/client'; // Import createRoot to render React app in the DOM
import './index.css';                           // Import global CSS styles
import App from './App.jsx';                    // Import the main App component

// Find the root DOM element and render the React app inside it
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Render the main App component */}
    <App />
  </StrictMode>,
);
