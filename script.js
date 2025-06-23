const button = document.querySelector(".btn");
const links = document.querySelector(".links");

button.addEventListener("click", function () {
  links.classList.toggle("hidden");
});

document.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown")){
    links.classList.add("hidden");
  }
});
