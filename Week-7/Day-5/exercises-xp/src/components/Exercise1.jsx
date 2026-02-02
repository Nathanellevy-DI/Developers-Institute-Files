function Exercise1() {
  // Step 2: Create a constant variable with JSX
  const myelement = <h1>I Love JSX!</h1>;
  
  // Step 3: Create a constant variable named sum
  const sum = 5 + 5;

  return (
    <div>
      <h2 style={{ color: '#646cff', marginBottom: '20px' }}>
        Exercise 1: With JSX
      </h2>
      
      {/* Step 1: Display "Hello World!" in a paragraph */}
      <p>Hello World!</p>
      
      {/* Step 2: Render the myelement variable */}
      {myelement}
      
      {/* Step 3: Render the sentence with sum */}
      <p>React is {sum} times better with JSX</p>
    </div>
  );
}

export default Exercise1;