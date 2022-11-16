const menu=document.getElementById("menu-hide");
const hamburger=document.getElementById("hamburger");
const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById('three');
const four=document.getElementById('four');

hamburger.addEventListener("click", () => {
    menu.style.display = "flex";
  });

  one.addEventListener("click", () => {
    menu.style.display = "none";
  });

  two.addEventListener("click", () => {
    menu.style.display = "none";
  });

  three.addEventListener("click", () => {
    menu.style.display = "none";
  });

  four.addEventListener("click", () => {
    menu.style.display = "none";
  });