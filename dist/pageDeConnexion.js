// Login form submission
const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email-address").value;
  const password = document.getElementById("password").value;

  // Demo credentials - in a real app, this would be handled by a server
  if (email === "admin@pharmasante.fr" && password === "admin123") {
    // Successful login - redirect to admin dashboard
    window.location.href = "admin.html";
  } else {
    // Show error message
    errorMessage.classList.remove("hidden");

    // Shake animation for error feedback
    loginForm.classList.add("animate-shake");
    setTimeout(() => {
      loginForm.classList.remove("animate-shake");
    }, 500);

    // Clear password field
    document.getElementById("password").value = "";
  }
});

// Password reset modal
const forgotPasswordLink = document.getElementById("forgot-password");
const passwordResetModal = document.getElementById("password-reset-modal");
const closeModalButton = document.getElementById("close-modal");
const sendResetLinkButton = document.getElementById("send-reset-link");
const successNotification = document.getElementById("success-notification");
const closeNotificationButton = document.getElementById("close-notification");

forgotPasswordLink.addEventListener("click", function (e) {
  e.preventDefault();
  passwordResetModal.classList.remove("hidden");
});

closeModalButton.addEventListener("click", function () {
  passwordResetModal.classList.add("hidden");
});

sendResetLinkButton.addEventListener("click", function () {
  const resetEmail = document.getElementById("reset-email").value;

  if (resetEmail) {
    // In a real app, this would send a request to the server
    passwordResetModal.classList.add("hidden");
    successNotification.classList.remove("hidden");

    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      successNotification.classList.add("hidden");
    }, 5000);
  }
});

closeNotificationButton.addEventListener("click", function () {
  successNotification.classList.add("hidden");
});

// Close modal when clicking outside
window.addEventListener("click", function (e) {
  if (e.target === passwordResetModal) {
    passwordResetModal.classList.add("hidden");
  }
});

// Add shake animation
document.head.insertAdjacentHTML(
  "beforeend",
  `
            <style>
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                    20%, 40%, 60%, 80% { transform: translateX(5px); }
                }
                .animate-shake {
                    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
                }
            </style>
        `
);
