// DOM Elements
const hamburgerButton = document.getElementById("hamburger-button");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle sidebar on mobile
function toggleSidebar() {
  sidebar.classList.toggle("open");
  sidebar.classList.toggle("hidden");

  // Toggle body scroll
  if (sidebar.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}
document.addEventListener("click", (e) => {
  if (!hamburgerButton.contains(e.target) && !sidebar.contains(e.target)) {
    // mobileMenu.classList.remove("show");
    sidebar.classList.add("hidden", "open");
  }
});

// Event Listeners
hamburgerButton.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", toggleSidebar);

// Close sidebar when clicking a link on mobile
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      toggleSidebar();
    }

    // Set active link
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    sidebar.classList.remove("open");
    hamburgerButton.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
});


// Affichage le popup de contact
const contactPopup = document.getElementById("contact-popup-option");
const contactOpened = document.getElementById("contactOpen");
const closeContactPopup = document.getElementById("close-popup");

contactOpened.addEventListener("click", () => {
  contactPopup.classList.remove("hidden");
});
closeContactPopup.addEventListener("click", () => {
  contactPopup.classList.add("hidden");
});

// Form submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  const privacy = document.getElementById("privacy").checked;

  // Validate form
  if (!firstName || !lastName || !email || !subject || !message || !privacy) {
    alert(
      "Veuillez remplir tous les champs obligatoires et accepter la politique de confidentialité."
    );
    return;
  }

  // In a real application, you would send this data to your server
  // For this demo, we'll just show a success message
  alert(
    `Merci ${firstName} ${lastName} ! Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.`
  );

  // Reset form
  contactForm.reset();
});
