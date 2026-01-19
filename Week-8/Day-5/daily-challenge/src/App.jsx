// Import the calculator component that handles all calculations and UI
import Calculator from "./components/Calculator";

// Load the main application stylesheet
import "./App.css";

// Primary application component
export default function App() {
  return (
    // Wrapper div to center content and apply spacing
    <div
      style={{
        textAlign: "center",       // Centers all child elements
        marginTop: "60px",         // Adds spacing from the top
        backgroundColor: "#eef2f7", // Soft light background
        minHeight: "100vh"         // Ensures full screen height
      }}
    >
      {/* Main heading displayed above the calculator */}
      <h1 style={{ color: "#1f2937" }}>
        React Calculator
      </h1>

      {/* Render the calculator component */}
      <Calculator />
    </div>
  );
}
