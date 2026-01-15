

import { useState } from "react";   // Bring in the useState hook to manage component state
import Garage from "./Garage";      // Load the Garage component for use inside Car

function Car(props) {
    // Define state to keep track of the car's color
    const [color, setColor] = useState("red");

    // Display car details along with the Garage component
    return (
        <>
            {/* Show the current color and model of the car */}
            <h1>This car is {color} {props.carInfo.model}</h1>

            {/* Send the size information as a prop to Garage */}
            <Garage size="small" />
        </>
    );
}

// Make the Car component available for import in other files
export default Car;
