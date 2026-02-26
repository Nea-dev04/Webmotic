// Menu mobile
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Envoi réel vers Formspree
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      status.textContent = "Message envoyé avec succès ✔";
      status.style.color = "green";
      form.reset();
    } else {
      status.textContent = "Erreur lors de l'envoi.";
      status.style.color = "red";
    }
  } catch (error) {
    status.textContent = "Problème réseau.";
    status.style.color = "red";
  }
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

