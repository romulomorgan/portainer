const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/', (req, res) => {
  const msg = req.body.message || "Mensagem não recebida.";
  res.send({ resposta: "Um OLá! Eu estou adorando ter você aqui comigo :)  " + msg });
  console.log('🟢 Requisição recebidas no POST /');
  console.log('📦 Conteúdo recebidos:', req.body);
});

app.listen(PORT, () => {
  console.log('Servidor Node.js rodando na porta', PORT);
});
