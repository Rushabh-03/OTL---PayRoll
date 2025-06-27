// Back to Top Button Functionality
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");

  // Show/hide button based on scroll position
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 250) {
      // Show button after scrolling down 250px
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  // Scroll to top when button is clicked
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  });
});

// Search Bar Functionality
document.addEventListener("navbarLoaded", function () {
  const searchBtn = document.querySelector(".search-btn");
  const searchInput = document.querySelector(".search-input");

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", function (e) {
      e.preventDefault();
      searchInput.classList.toggle("active");
      if (searchInput.classList.contains("active")) {
        searchInput.focus();
      }
    });

    // Close search on click outside
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".search-container")) {
        searchInput.classList.remove("active");
      }
    });

    // Close search on escape key
    document.addEventListener("keyup", function (e) {
      if (e.key === "Escape") {
        searchInput.classList.remove("active");
      }
    });
  }

});
