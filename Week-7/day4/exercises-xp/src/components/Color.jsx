
import { useState, useEffect } from "react";

function Color() {
    // Initialize state to keep track of the selected color
    const [favoriteColor, setFavoriteColor] = useState("red");

    // Execute side effects after each component render
    useEffect(() => {
        alert("useEffect reached");
    });

    // Update the color state when the button is clicked
    const changeColor = () => {
        setFavoriteColor("blue");
    };

    return (
        <div>
            {/* Show the currently selected color */}
            <h1>My favourite color is {favoriteColor}</h1>

            {/* Trigger the color change on button click */}
            <button onClick={changeColor}>Change color</button>
        </div>
    );
}

export default Color;
