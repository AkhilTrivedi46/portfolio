const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";   // Show button
  } else {
    scrollBtn.style.display = "none";    // Hide button
  }
};

scrollBtn.onclick = () => {
  document.body.scrollTop = 0;           // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, etc.
};

// window.onscroll = () => {
//   const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//   console.log("Scroll position:", scrollTop);

//   if (scrollTop > 200) {
//     scrollBtn.style.display = "block";
//   } else {
//     scrollBtn.style.display = "none";
//   }
// };

