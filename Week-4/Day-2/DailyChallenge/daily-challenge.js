// Grab the form and output div
const form = document.getElementById('nameForm');
const outputDiv = document.getElementById('output');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload

  // Get input values
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;

  // Create JSON object
  const jsonData = {
    firstName: firstName,
    lastName: lastName
  };

  // Append JSON string to DOM
  outputDiv.textContent = JSON.stringify(jsonData, null, 2);
});
