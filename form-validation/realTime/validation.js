// Persist data across sessions using localStorage
const form = document.getElementById('registration');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');


const nameFeedback = document.getElementById('nameFeedback');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');


// Real-time validation feedback
nameInput.addEventListener('input', () => {
  if (nameInput.value.length < 3) {
    nameFeedback.textContent = "Name must be at least 3 characters long.";
  } else {
    nameFeedback.textContent = "";
  }
});

emailInput.addEventListener('input', () => {
  if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
    emailFeedback.textContent = "Please enter a valid email.";
  } else {
    emailFeedback.textContent = "";
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 6) {
    passwordFeedback.textContent = "Password must be at least 6 characters long.";
  } else {
    passwordFeedback.textContent = "";
  }
});

// Form submission validation
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from submitting

  let isValid = true;

  // Name validation
  if (nameInput.value.length < 3) {
    nameFeedback.textContent = "Name must be at least 3 characters long.";
    isValid = false;
  }

  // Email validation
  if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
    emailFeedback.textContent = "Please enter a valid email.";
    isValid = false;
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    passwordFeedback.textContent = "Password must be at least 6 characters long.";
    isValid = false;
  }

 

});

