// Get the input, result, and button elements
const inputElement = document.querySelector('.inpt');
const resultElement = document.querySelector('.result');
const pastButton = document.querySelector('.past');
const submitButton = document.querySelector('.submit');
const copyButton = document.querySelector('.copy');
const copiedMessage = document.querySelector('.copied-message');

// Add event listener to the "Past!" button
pastButton.addEventListener('click', function() {
  // Get the text from the clipboard
  navigator.clipboard.readText()
    .then((clipboardText) => {
      // Paste the clipboard text into the input
      inputElement.value = clipboardText;
      
      // Capitalize the text and display the result
      capitalizeText();
    })
    .catch((error) => {
      console.error('Error pasting text:', error);
      // You can add an error message or handle the error in a different way
    });
});

// Add event listener to the "Submit" button
submitButton.addEventListener('click', function() {
  // Capitalize the text and display the result
  capitalizeText();
});

// Function to capitalize the text
function capitalizeText() {
  const inputValue = inputElement.value;
  const capitalizedText = inputValue.toUpperCase();
  resultElement.textContent = capitalizedText;
}

// Add event listener to the "Copy!" button
copyButton.addEventListener('click', function() {
  const resultText = resultElement.textContent;
  navigator.clipboard.writeText(resultText)
    .then(() => {
      console.log('Text copied to clipboard');
      copiedMessage.textContent = 'Copied to clipboard';
      copiedMessage.classList.add('show');
      setTimeout(() => {
        copiedMessage.classList.remove('show');
      }, 2000);
    })
    .catch((error) => {
      console.error('Error copying text:', error);
      // You can add an error message or handle the error in a different way
    });
});