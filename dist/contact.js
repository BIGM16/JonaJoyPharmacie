// heure d'ouverture
// const openStatus = document.getElementById("open-status");
// const horaire = {
//     0 : { ouverture : "10:00", fermeture : "18:00" }, // Dimanche
//     1 : { ouverture : "09:00", fermeture : "17:00" }, // Lundi
//     2 : { ouverture : "09:00", fermeture : "17:00" }, // Mardi
//     3 : { ouverture : "09:00", fermeture : "17:00" }, // Mercredi
//     4 : { ouverture : "09:00", fermeture : "17:00" }, // Jeudi
//     5 : { ouverture : "09:00", fermeture : "17:00" }, // Vendredi
// }

// const updateOpenStatus = () => {
//     const now = new Date();
//     const day = now.getDay();
//     const hour = now.getHours();
//     const minute = now.getMinutes();

//     const { ouverture, fermeture } = horaire[day];
//     const isOpen = (hour > parseInt(ouverture.split(":")[0]) || (hour === parseInt(ouverture.split(":")[0]) && minute >= parseInt(ouverture.split(":")[1]))) &&
//                    (hour < parseInt(fermeture.split(":")[0]) || (hour === parseInt(fermeture.split(":")[0]) && minute < parseInt(fermeture.split(":")[1])));

//     openStatus.textContent = isOpen ? "Ouvert" : "Fermé";
// };

// faqToggles.forEach((toggle) => {
//   toggle.addEventListener("click", () => {
//     facAnswer.forEach((c) => {
//       c.classList.add("hidden")
//     }
//     toggle.classList.remove("hidden"));

//     // Change the icon
//     const icon = toggle.querySelector("svg path");
//     if (answer.classList.contains("hidden")) {
//       icon.setAttribute("d", "M19 9l-7 7-7-7");
//     } else {
//       icon.setAttribute("d", "M5 15l7-7 7 7");
//     }
//   });
// });

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
