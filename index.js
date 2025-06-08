function addingEventListener() {
}
/**
 * Attaches a click event listener to the HTML element with the ID 'button'.
 * When the button is clicked, a simple message will be logged to the console.
 */
function addingEventListener() {
  const buttonElement = document.getElementById('button');

  // It's good practice to ensure the element exists before trying to interact with it
  if (buttonElement) {
    buttonElement.addEventListener('click', () => {
      console.log('Button clicked!');
    });
  } else {
    console.warn("Element with ID 'button' not found. Ensure your HTML has a button with id='button'.");
  }
}