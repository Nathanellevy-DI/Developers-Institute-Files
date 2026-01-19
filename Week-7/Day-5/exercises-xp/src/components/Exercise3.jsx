import { Component } from 'react';
import './Exercise3.css';

class Exercise extends Component {
  render() {
    // PART II: Style object for h1
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <div>
        <h2 style={{ color: '#646cff', marginBottom: '20px' }}>
          Exercise 3: HTML Tags in React
        </h2>
        
        {/* PART I: Create h1 tag with red color and lightblue background */}
        {/* PART II: Apply style_header object to h1 */}
        <h1 style={style_header}>This is a styled header</h1>
        
        {/* PART III: Paragraph with CSS class from Exercise3.css */}
        <p className="para">
          This is a paragraph styled with an external CSS file
        </p>
        
        {/* PART I: Create a link */}
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
          Click here to visit Example.com
        </a>
        
        <br /><br />
        
        {/* PART I: Create a form */}
        <form>
          <h3>Sample Form</h3>
          <label htmlFor="name">Enter your name: </label>
          <input type="text" id="name" name="name" />
          <br /><br />
          <button type="submit">Submit</button>
        </form>
        
        <br />
        
        {/* PART I: Create an image */}
        <h3>Sample Image</h3>
        <img 
          src="https://via.placeholder.com/200" 
          alt="Sample placeholder" 
        />
        
        <br /><br />
        
        {/* PART I: Create a list */}
        <h3>Sample List</h3>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;