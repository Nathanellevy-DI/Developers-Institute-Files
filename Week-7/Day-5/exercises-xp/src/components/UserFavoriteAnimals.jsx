import { Component } from 'react';

class UserFavoriteAnimals extends Component {
  render() {
    // Get favAnimals from props
    const { favAnimals } = this.props;
    
    return (
      <div>
        <h3>Favorite Animals:</h3>
        <ul>
          {/* Step 3: Use map method to create li tags */}
          {/* Use index as key (second parameter of map function) */}
          {favAnimals.map((animal, index) => (
            <li key={index}>{animal}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserFavoriteAnimals;