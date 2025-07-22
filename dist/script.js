// Sélectionne les éléments du menu mobile

const { document } = required("postcss");

const navLinks = document.querySelectorAll(".nav-link");
const boutonMenuEntre = document.querySelector(".boutonMenuEntre");
const menuLateral = document.querySelector(".menuLateral");
const closeMenuLateral = document.querySelector(".closeMenuLateral");
const inputSearch = document.getElementById("search-input");
const searchClear = document.getElementById("searchClear");
const searchIcon = document.getElementById("search-icon");

// faire afficher le menu latéral

boutonMenuEntre.addEventListener("click", () => {
  menuLateral.classList.remove("hiddenMenu");
  menuLateral.classList.add("showMenu");
});
closeMenuLateral.addEventListener("click", () => {
  menuLateral.classList.remove("showMenu");
  menuLateral.classList.add("hiddenMenu");
});

// Optionnel : Fermer le menu quand on clique en dehors
document.addEventListener("click", (e) => {
  if (!boutonMenuEntre.contains(e.target) && !menuLateral.contains(e.target)) {
    menuLateral.classList.remove("showMenu");
    menuLateral.classList.add("hiddenMenu");
  }
});

// selection et changement visuel des liens de la nav-barre

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("activeLink"));
    link.classList.add("activeLink");
  });
});

// function de clear la barre de recherche

function toggleClearBtn() {
  if (inputSearch.value.length > 0) {
    searchClear.classList.remove("hidden");
    searchIcon.classList.add("hidden");
  } else {
    searchClear.classList.add("hidden");
    searchIcon.classList.remove("hidden");
  }
}
function clearInput() {
  inputSearch.value = "";
  searchClear.classList.add("hidden");

  inputSearch.focus;
}

// const menuButton = document.getElementById("mobile-menu-button");
// const mobileMenu = document.getElementById("mobile-menu");

// // Affiche ou masque le menu mobile lors du clic sur le bouton
// menuButton.addEventListener("click", () => {
//   console.log("bonjooour");
//   mobileMenu.classList.add("show");
//   mobileMenu.classList.remove("hidden");
// });

// selection et affichage des catégories
const categoryButtons = document.querySelectorAll(".category-btn");
const products = document.querySelectorAll(".product-card");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const selectedCategory = button.dataset.category;
    products.forEach((product) => {
      const productCategory = product.dataset.category;

      if (selectedCategory === "all" || selectedCategory === productCategory) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

const mobileProduit = document.querySelectorAll(".carte-produit");

mobileProduit.forEach((container) => {
  container.addEventListener("click", () => {
    // fermer les autres
    mobileProduit.forEach((other) => {
      if (other !== container) {
        other.classList.add("h-32");
        other.classList.remove("h-[300px]");

        const autremobileContainer =
          other.querySelectorAll(".mobile-container");
        autremobileContainer.forEach((autreenfant) => {
          autreenfant.classList.remove("contreEnfant");
          autreenfant.classList.add("enfant");
        });
        const autremobileImage = other.querySelectorAll(".ImageProduit");
        autremobileImage.forEach((autrepetitenfant) => {
          autrepetitenfant.classList.add("imageproduit");
          autrepetitenfant.classList.remove("contreImageProduit");
        });
        const autreDetailProduit = other.querySelectorAll(".DetailProduit");
        autreDetailProduit.forEach((autreautreenfant) => {
          autreautreenfant.classList.add("detailproduit");
          autreautreenfant.classList.remove("contreDetailProduit");
        });
      }
    });
    // toggle le reste
    const EstOuvert = container.classList.contains("h-[300px]");

    // Tu dois écrire le reste du script pour le mobile produit !!!!!
    container.classList.toggle("h-32", EstOuvert);
    container.classList.toggle("h-[300px]", !EstOuvert);

    const mobileContainer = container.querySelectorAll(".mobile-container");
    mobileContainer.forEach((enfant) => {
      enfant.classList.toggle("contreEnfant", !EstOuvert);
      enfant.classList.toggle("enfant", EstOuvert);
    });
    const mobileImage = container.querySelectorAll(".ImageProduit");
    mobileImage.forEach((petitenfant) => {
      petitenfant.classList.toggle("imageproduit", EstOuvert);
      petitenfant.classList.toggle("contreImageProduit", !EstOuvert);
    });
    const DetailProduit = container.querySelectorAll(".DetailProduit");
    DetailProduit.forEach((autreenfant) => {
      autreenfant.classList.toggle("detailproduit", EstOuvert);
      autreenfant.classList.toggle("contreDetailProduit", !EstOuvert);
    });
  });
});

// Affichage du menu laterale

// PAGE DE CONTACT

// Affichage le popup de contact
const contactPopup = document.getElementById("contact-popup-option");
const contactOpen = document.getElementById("contactOpen");
const closeContactPopup = document.getElementById("close-popup");

contactOpen.addEventListener("click", () => {
  contactPopup.classList.remove("hidden");
});
closeContactPopup.addEventListener("click", () => {
  contactPopup.classList.add("hidden");
});

// Envoies appel téléphonique

// FAQ toggles
// const faqToggles = document.querySelectorAll(".faq-toggle");

document.querySelectorAll(".faq-toggle").forEach((question) => {
  question.addEventListener("click", () => {
    // const answer = question.nextElementSibling;
    const answer = document.querySelectorAll(".faq-answer");
    const icon = question.querySelector(".faq-icon");

    // Toggle answer visibility
    answer.classList.toggle("hidden");

    // Rotate icon
    if (answer.classList.contains("hidden")) {
      icon.classList.remove("rotate-180");
    } else {
      icon.classList.add("rotate-180");
    }
  });
});

document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector(".faq-icon");

    // Toggle answer visibility
    answer.classList.toggle("hidden");

    // Rotate icon
    if (answer.classList.contains("hidden")) {
      icon.classList.remove("rotate-180");
    } else {
      icon.classList.add("rotate-180");
    }
  });
});

// PAGE ADMINISTRATION //

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

// Naviguer entre les side links

const voirProfil = document.getElementById("voir-profil");
const voirProduit = document.getElementById("voir-produit");
const produitAdmin = document.getElementById("produit-admin");
const profilAdmin = document.getElementById("profil-admin");

voirProfil.addEventListener("click", () => {
  console.log("Tu m'as cliqueé encore");
  profilAdmin.classList.remove("hidden");
  produitAdmin.classList.add("hidden");
});

voirProduit.addEventListener("click", () => {
  console.log("Tu m'as cliqueé");
  profilAdmin.classList.add("hidden");
  produitAdmin.classList.remove("hidden");
});
