// Loader
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// Dark / Light mode
const btn = document.getElementById("modeBtn");
btn.onclick = () => {
  document.body.classList.toggle("light");
  btn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
};