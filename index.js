const express = require('express');
const cors = require('cors'); // Corrigido aqui
const app = express();
const port = 3000; // Porta que o servidor irá rodar

// Importando rotas
const movieRoutes = require('./routes/movies');

// Middleware para entender JSON no body das requisições
app.use(express.json());

// Permitir CORS para todas as rotas
app.use(cors());

// Usando rotas
app.use('/restful/movies', movieRoutes); // Certifique-se de acessar essa rota

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor Rodando em http://localhost:${port}`);
});
