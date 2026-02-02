import UserFavoriteAnimals from './UserFavoriteAnimals';

function Exercise2() {
  // User object as provided in instructions
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
  };

  return (
    <div>
      <h2 style={{ color: '#646cff', marginBottom: '20px' }}>
        Exercise 2: Object
      </h2>
      
      {/* Step 1: Render first name and last name in h3 tags */}
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      
      {/* Step 2 & 3: Pass favAnimals array to UserFavoriteAnimals component */}
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
    </div>
  );
}

export default Exercise2;