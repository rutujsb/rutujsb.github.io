/* =======================================
   GLOBAL UTILITIES
   ======================================= */

// Insert current year into all elements with id starting with 'year'
document.querySelectorAll("[id^='year']").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

/* =======================================
   SMOOTH SCROLLING FOR SAME-PAGE LINKS
   ======================================= */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* =======================================
   THEME TOGGLE (LIGHT / DARK)
   ======================================= */
const themeToggleBtn = document.getElementById("theme-toggle");
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    // Update icon based on theme
    if (document.documentElement.classList.contains("dark")) {
      themeToggleBtn.textContent = "☀️"; // light mode icon
    } else {
      themeToggleBtn.textContent = "🌙"; // dark mode icon
    }
  });
}

/* =======================================
   CONTACT FORM HANDLER (DEMO ONLY)
   ======================================= */
function handleContact(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const output = document.getElementById("contactMsg");

  // Simple validation
  if (!name || !email || !message) {
    output.textContent = "Please fill in all fields.";
    output.style.color = "crimson";
    return false;
  }

  // Show success message (since this is a demo, no backend)
  output.textContent = "Thanks! Your message has been received.";
  output.style.color = "green";

  // Reset form
  event.target.reset();
  return false;
}

// Make contact handler available for inline HTML form onsubmit
window.handleContact = handleContact;
