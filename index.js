const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/', (req, res) => {
  const msg = req.body.message || "Mensagem não recebida.";
  res.send({ resposta: "Eu estou adorando ter você aqui comigo: " + msg });
});

app.listen(PORT, () => {
  console.log('Servidor Node.js rodando na porta', PORT);
});
