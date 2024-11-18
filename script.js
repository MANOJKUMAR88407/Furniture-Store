function shopNow() {
  alert("Welcome to our store! Browse our products below.");
}

// Example flag to simulate login status (in a real application, this would come from backend or cookies)
let isLoggedIn = false;

// Function called when user clicks "Add to Cart"
function addToCart() {
  if (isLoggedIn) {
    alert("Item added to cart!"); // Add item to cart logic
  } else {
    alert("Please log in or sign up to add items to your cart.");
    openModal("loginModal"); // Opens login modal for users to log in
  }
}

// Event listeners to open modals if user clicks sign up instead from within login modal
document.getElementById("signupLink").addEventListener("click", function () {
  closeModal("loginModal");
  openModal("signupModal");
});
// Function to open a modal
function openModal(modalId) {
  document.getElementById(modalId).style.display = "flex";
}

// Function to close a modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Login form validation
function validateLogin() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const errorMessage = document.getElementById("loginErrorMessage");

  if (username === "" || password === "") {
    errorMessage.textContent = "Both fields are required.";
    return false;
  }

  // Add login logic here (for demo purposes, show success message)
  alert("Login successful!");
  closeModal("loginModal");
  return false;
}

// Signup form validation
function validateSignup() {
  const username = document.getElementById("signupUsername").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorMessage = document.getElementById("signupErrorMessage");

  if (
    username === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    errorMessage.textContent = "All fields are required.";
    return false;
  }

  if (password.length < 6) {
    errorMessage.textContent = "Password must be at least 6 characters long.";
    return false;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match.";
    return false;
  }

  // Add signup logic here (for demo purposes, show success message)
  alert("Signup successful!");
  closeModal("signupModal");
  return false;
}
// Newsletter Subscription Form
document
  .getElementById("newsletterForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form submission

    const emailInput = document.getElementById("newsletterEmail").value;
    const messageElement = document.getElementById("newsletterMessage");

    if (emailInput) {
      messageElement.textContent = "Thank you for subscribing!";
      document.getElementById("newsletterEmail").value = ""; // Clears the input
    } else {
      messageElement.textContent = "Please enter a valid email.";
    }
  });
// Newsletter Subscription Form
document
  .getElementById("newsletterForm")
  .addEventListener("Subscribe", function (event) {
    event.preventDefault(); // Prevents form submission

    const emailInput = document.getElementById("newsletterEmail").value;
    const messageElement = document.getElementById("newsletterMessage");

    if (emailInput) {
      messageElement.textContent = "Thank you for subscribing!";
      document.getElementById("newsletterEmail").value = ""; // Clears the input
    } else {
      messageElement.textContent = "Please enter a valid email.";
    }
  });
