const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// 🔥 SERVIR ARQUIVOS ESTÁTICOS (HTML, CSS, JS)
app.use(express.static(__dirname));

// Rota do formulário
app.post("/contato", (req, res) => {
    const { nome, email, mensagem } = req.body;

    console.log("Nova mensagem:");
    console.log(nome, email, mensagem);

    res.json({ status: "Mensagem recebida com sucesso!" });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
