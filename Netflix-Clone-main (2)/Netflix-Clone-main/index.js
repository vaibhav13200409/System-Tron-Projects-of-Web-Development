document.addEventListener("DOMContentLoaded", () => {
  const getStartedButton = document.querySelector(".primary__button");
  const emailInput = document.querySelector(".email__input");

  getStartedButton.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
      // Example: Redirect to a sign-up page
      window.location.href = "signup.html";
    } else {
      alert("Please enter a valid email address.");
    }
  });

  // Email validation function
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
