import { useState } from "react";

function Events() {
    // Handle the click event for the button
    const clickMe = () => {
        alert("I was clicked");
    };

    // Detect keyboard input and react when the Enter key is pressed
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            alert(`The enter key was pressed, your input is: ${event.target.value}`);
        }
    };

    // Manage the ON/OFF state for the toggle button
    const [isToggleOn, setIsToggleOn] = useState(true);

    // Switch the toggle state between true and false
    const toggle = () => {
        setIsToggleOn(!isToggleOn);
    };

    return (
        <div>
            {/* Button that triggers a click alert */}
            <button onClick={clickMe}>Click me</button><br /><br />

            {/* Input field that listens for the Enter key */}
            <input
                type="text"
                placeholder="Type and press Enter"
                onKeyDown={handleKeyDown}
            /><br /><br />

            {/* Button used to toggle between ON and OFF states */}
            <button onClick={toggle}>
                {isToggleOn ? "ON" : "OFF"}
            </button>
        </div>
    );
}

export default Events;
