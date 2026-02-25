// Menu mobile
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Simulation envoi formulaire
const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  message.textContent = "Message envoyé avec succès !";
  message.style.color = "green";
  form.reset();
});

// ===== DARK MODE =====

const themeToggle = document.getElementById("theme-toggle");

// Charger préférence sauvegardée
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  }
});

