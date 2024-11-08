// Utilisation GSAP
gsap.registerPlugin(ScrollTrigger);

// // GSAP sur "h1-accueil"
// const h1Accueil = document.querySelector(".h1-accueil");

// gsap.to(h1Accueil, {
//   xPercent: 62,
//   duration: 1,
//   scrollTrigger: {
//     trigger: h1Accueil,
//     toggleActions: "restart reverse reverse play",
//     markers: true,
//     start: "top 30%",
//     end: "bottom 5%",
//   },
// });

// -----------------------------------------------

// Gestion du header et de la barre de navigation avec les options de langues lorsque max-width = 1250px
const barreNav = document.querySelector(".barre-nav");
const optionsLangues = document.querySelector(".options-langues");

function toggleNavBar() {
  const barreNav = document.querySelector(".barre-nav");
  const optionsLangues = document.querySelector(".options-langues");

  if (
    window.getComputedStyle(barreNav).display === "none" &&
    window.getComputedStyle(optionsLangues).display === "none"
  ) {
    barreNav.style.display = "grid";
    optionsLangues.style.display = "grid";
  } else {
    barreNav.style.display = "none";
    optionsLangues.style.display = "none";
  }
}

const iconeMenu = document.querySelector(".icone-menu img");

iconeMenu.addEventListener("click", toggleNavBar);

// -----------------------------------------------

// Gérer le display du header en fonction de la taille de redimensionnement de la page
function resize() {
  const header = document.querySelector(".header");
  const barreNav = document.querySelector(".barre-nav");
  const optionsLangues = document.querySelector(".options-langues");

  if (window.innerWidth < 1250) {
    barreNav.style.display = "none";
    optionsLangues.style.display = "none";
  } else {
    barreNav.style.display = "flex";
    optionsLangues.style.display = "flex";
  }
}

window.addEventListener("resize", resize);

// -----------------------------------------------

// Gérer le clique sur les images
function previous() {
  const diaporama = document.querySelector(".diaporama");
  const widthSlider = document.querySelector(".slider").offsetWidth;
  const scrollLeft = diaporama.scrollLeft;
  const photo = diaporama.querySelectorAll(".photo");

  diaporama.scrollLeft = diaporama.scrollLeft - widthSlider;

  if (scrollLeft == 0) {
    diaporama.scrollLeft = widthSlider * (photo.length - 1);
  }
}

function next() {
  const diaporama = document.querySelector(".diaporama");
  const widthSlider = document.querySelector(".slider").offsetWidth;
  const scrollLeft = diaporama.scrollLeft;
  const photo = diaporama.querySelectorAll(".photo");

  diaporama.scrollLeft = diaporama.scrollLeft + widthSlider;

  if (scrollLeft == widthSlider * (photo.length - 1)) {
    diaporama.scrollLeft = 0;
  }
}
