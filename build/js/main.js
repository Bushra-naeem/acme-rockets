const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  console.log(hamburgerBtn);
  const mobileMenu = document.getElementById("mobile-menu");
  console.log(mobileMenu);

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerBtn.classList.toggle("toggle-btn");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

// Full document loaded of html
document.addEventListener("DOMContentLoaded", initApp);
