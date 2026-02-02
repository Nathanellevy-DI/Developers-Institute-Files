function Garage(props) {
    // Display the garage size received from the parent component
    return (
        <h2>Who lives in my {props.size} Garage ?</h2>
    );
}

// Export the Garage component for use in other files
export default Garage;
