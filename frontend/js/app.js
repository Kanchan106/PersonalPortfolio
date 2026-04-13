const API_URL = "http://localhost:5000/api";

document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const res = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message })
  });

  const data = await res.json();
  document.getElementById("response").innerText = data.success || data.error;
});

// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});