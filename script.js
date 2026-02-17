// Alternar tema
document.addEventListener("DOMContentLoaded", function() {

  const themeToggle = document.getElementById("themeToggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("light");
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("light")) {
        themeToggle.textContent = "🌙 Modo Escuro";
      } else {
        themeToggle.textContent = "☀️ Modo Claro";
      }
    });
  }

});



// Animação ao rolar
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;
        const visible = 100;

        if (elementTop < windowHeight - visible) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
const form = document.getElementById("formContato");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        mensagem: document.getElementById("mensagem").value
    };

    const response = await fetch("http://localhost:3000/contato", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    alert(result.status);
});
