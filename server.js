const dotenv = require('dotenv'); // Importa o pacote dotenv para gerenciar variáveis de ambiente

dotenv.config(); // Carrega as variáveis definidas no arquivo .env para process.env 



const express = require('express');

const cors = require('cors'); // Importa o pacote cors para permiƟr requisições de diferentes origens 

const bodyParser = require('body-parser'); // Importa o pacote body-parser para analisar o corpo das requisições HTTP 

const db = require('./config/db'); // Importa a conexão com o banco de dados 

const productsRoutes = require('./routes/products');

const app = express();

app.use(cors()); // Habilita o CORS para todas as rotas

app.use(bodyParser.json()); // Configura o body-parser para analisar requisições JSON 

app.use('/api/products',productsRoutes);

app.get('/', (req, res) => {
    res.send('Servidor está habilitado'); // Define uma rota inicial para testar o servidor
   }); 
   
   const PORT = process.env.PORT || 3000;

   app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
   }); // Escreve uma mensagem informando que o servidor está rodando 
   
   

   