const modalBtn = document.getElementById("add-product-btn");
const closeModalBtn = document.getElementById("cancel-product");
const modal = document.getElementById("product-modal");
closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
modalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

const mobileMenu = document.getElementById("mobile-sidebar");
const menuBtn = document.getElementById("sidebar-toggle");
const closeBtn = document.getElementById("close-sidebar");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

const userBtn = document.getElementById("user-menu-button");
const userMenu = document.getElementById("user-menu");

userBtn.addEventListener("click", () => {
  userMenu.classList.toggle("hidden");
});

// Optionnel : Fermer le menu quand on clique en dehors
document.addEventListener("click", (e) => {
  if (!userBtn.contains(e.target) && !userMenu.contains(e.target)) {
    // mobileMenu.classList.remove("show");
    userMenu.classList.add("hidden");
  }
});

// Naviguer entre les side links et affichage

const sideButtons = document.querySelectorAll(".sidebar-item");
const section = document.querySelectorAll('[id^="section-"]');

sideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("salir");
    sideButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const targetId = button.getAttribute("data-target");

    section.forEach((section) => {
      section.classList.add("hidden");
    });
    document.getElementById(targetId).classList.remove("hidden");
  });
});

// PROFIL SECTION

// Handle profile image upload
const profilePicInput = document.getElementById("profilePicInput");
const profileImage = document.getElementById("profileImage");

profilePicInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Handle form submission
const profileForm = document.getElementById("profileForm");
profileForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Show success message
  const formData = new FormData(profileForm);
  const userData = {};
  formData.forEach((value, key) => {
    userData[key] = value;
  });

  // Create success notification
  const notification = document.createElement("div");
  notification.className =
    "fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center";
  notification.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Profil mis à jour avec succès!</span>
            `;
  document.body.appendChild(notification);

  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.remove();
  }, 3000);

  console.log("Profil mis à jour:", userData);
});
