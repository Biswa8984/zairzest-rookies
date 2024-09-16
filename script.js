let btn = document.querySelector(".nav-btn");
btn.addEventListener("click", () => {
  console.log("clicked");
  let pg = document.querySelector(".sidebar");
  pg.classList.toggle("show");
});
let close = document.querySelector(".nav-btn-x");
close.addEventListener("click", () => {
  let pg = document.querySelector(".sidebar");
  pg.classList.toggle("show");
});
