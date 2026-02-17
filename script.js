// Alternar tema
const button = document.getElementById("themeToggle");
const body = document.body;

// Garantir que começa no modo escuro
body.classList.add("dark");

button.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        button.textContent = "🌙 Modo Escuro";
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
        button.textContent = "☀️ Modo Claro";
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
