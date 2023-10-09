const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');
const newQuoteBtn = document.querySelector('.new-quote');
const copyQuoteBtn = document.querySelector('.copy-quote');
const pronounceQuoteBtn = document.querySelector('.pronounce-quote');

function getQuote() {
  // Call the API to get a random quote
  
  fetch('https://api.quotable.io/random')

  
  
    .then(response => response.json())
    .then(data => {
      // Update the quote text and author
      quoteText.textContent = data.content;
      quoteAuthor.textContent = `- ${data.author}`;
    })
    .catch(error => console.log(error));
}

function copyQuote() {
  // Copy the quote text to the clipboard
  const quote = `${quoteText.textContent} ${quoteAuthor.textContent}`;
  
  // Create a temporary input element to hold the quote text
  const tempInput = document.createElement('input');
  tempInput.value = quote;
  
  // Add the input element to the DOM and select the text
  document.body.appendChild(tempInput);
  tempInput.select();
  
  // Copy the text to the clipboard
  document.execCommand('copy');
  
  // Remove the input element from the DOM
  document.body.removeChild(tempInput);
}

function pronounceQuote() {
  // Create a new SpeechSynthesisUtterance object
  const utterance = new SpeechSynthesisUtterance();
  // Set the text to speak
  utterance.text = `${quoteText.textContent} by ${quoteAuthor.textContent}`;
  // Speak the text
  speechSynthesis.speak(utterance);
}

newQuoteBtn.addEventListener('click', getQuote);
copyQuoteBtn.addEventListener('click', copyQuote);
pronounceQuoteBtn.addEventListener('click', pronounceQuote);

// Get a new quote when the page loads
getQuote();

