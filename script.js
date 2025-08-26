const btn = document.getElementById("mode-toggle");
const body = document.body;

btn.addEventListener("click", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");

  if (body.classList.contains("light")) {
    btn.textContent = "☀️ Light Mode";
  } else {
    btn.textContent = "🌙 Dark Mode";
  }
});
