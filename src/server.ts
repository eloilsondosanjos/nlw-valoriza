import express from "express";

const app = express();

app.get('/test', (req, res) => {
  return res.send('Olá, você acabou de acessar a rota de teste')
})

app.post('/teste', (req, res) => {
  return res.send('Antenção essa rota é de post no teste')
})

app.listen(3000, () => console.log("Server is running"))