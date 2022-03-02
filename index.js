const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", (evt) => {
  const header = evt.target.closest("header");
  header.nextElementSibling.classList.toggle("active");
});