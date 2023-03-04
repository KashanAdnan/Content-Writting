const closeMenuBar = document.getElementById("close");
closeMenuBar.style.display = "none";

const openMenu = () => {
  const closeMenuBar = document.getElementById("close");
  closeMenuBar.style.display = "block";
  const menu = document.getElementById("menu");
  menu.classList.add("active");
  const bars = document.getElementById("bars");
  bars.style.display = "none";
};
const closeMenu = () => {
  const menu = document.getElementById("menu");
  const bars = document.getElementById("bars");
  const closeMenuBar = document.getElementById("close");
  closeMenuBar.style.display = "none";
  menu.classList.remove("active");
  bars.style.display = "block";
};
