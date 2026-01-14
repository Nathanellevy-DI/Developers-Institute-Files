// Exercise 1: Import the Car component
import Car from "./components/Car";
// Exercise 2: Import the Events component
import Events from "./components/Events";
// Exercise 3: Import the Phone component
import Phone from "./components/Phone";
// Exercise 4: Import the Color component
import Color from "./components/Color";

import "./App.css";

function App() {
  // Exercise 1: Define information about a car
  const carinfo = { 
    name: "Porsche", 
    model: "Carrera" 
  };

  return (
    <div>
      {/* Exercise 1: Render the Car component with car info */}
      <Car carInfo={carinfo} />
      
      {/* Exercise 2: Render the Events component */}
      <Events />
      
      {/* Exercise 3: Render the Phone component */}
      <Phone />
      
      {/* Exercise 4: Render the Color component */}
      <Color />
    </div>
  );
}

// Export App to be used by React
export default App;
