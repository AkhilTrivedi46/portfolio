document.addEventListener("DOMContentLoaded", () => {
  const zipperScreen = document.getElementById("zipper-screen");
  const zipperImg = document.getElementById("zipper-img");
  const mainPortfolio = document.getElementById("main-portfolio");

  zipperImg.addEventListener("dblclick", () => {
    // Add a class for animation (if needed)
    zipperScreen.classList.add("fade-out");

    // Wait for animation (or instantly if not using CSS)
    setTimeout(() => {
      zipperScreen.style.display = "none";
      mainPortfolio.style.display = "block";
    }, 500); // match this with CSS animation duration if used
  });
});
