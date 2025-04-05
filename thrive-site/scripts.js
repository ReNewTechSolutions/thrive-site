document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  const promoModal = document.getElementById("promo-modal");
  const guideModal = document.getElementById("guide-modal");

  const openPromoBtn = document.getElementById("open-promo-modal");
  const closePromoBtn = document.getElementById("close-promo-modal");

  const openGuideBtn = document.getElementById("open-guide-modal");
  const closeGuideBtn = document.getElementById("close-guide-modal");

  openPromoBtn.addEventListener("click", () => {
    promoModal.style.display = "block";
  });

  closePromoBtn.addEventListener("click", () => {
    promoModal.style.display = "none";
  });

  openGuideBtn.addEventListener("click", () => {
    guideModal.style.display = "block";
  });

  closeGuideBtn.addEventListener("click", () => {
    guideModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === promoModal) {
      promoModal.style.display = "none";
    }
    if (e.target === guideModal) {
      guideModal.style.display = "none";
    }
  });
});
