import { useState } from "react";

function Phone() {
    // Initialize state values describing the phone
    const [brand, setBrand] = useState("Samsung");
    const [model, setModel] = useState("Galaxy S20");
    const [color, setColor] = useState("black");
    const [year, setYear] = useState("2020");

    // Update the phone color when the button is clicked
    const changeColor = () => {
        setColor("blue");
    };

    return (
        <div>
            <h1>My phone is a {brand}</h1><br /><br />
            <p>It is a {color} {model} from {year}</p>

            {/* Trigger the color change */}
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default Phone;
