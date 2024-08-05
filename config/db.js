//importar a biblioteca mysql2 e criar a conexão com o Banco de Dados
const mysql = require('mysql2'); // Importa o pacote mysql2 para conectar ao banco de dados 

const db = mysql.createConnection({
    host: process.env.DB_HOST, // Endereço do servidor de banco de dados
    user: process.env.DB_USER, // Nome de usuário para acessar o banco de dados
    password: process.env.DB_PASS, // Senha do usuário para acessar o banco de dados
    database: process.env.DB_NAME // Nome do banco de dados a ser acessado
   }); 
    
   db.connect((err) => {
    if (err) {
    console.error('Erro ao conectar ao banco de dados:', err); // Exibe mensagem de erro
    return;
    }
    console.log('Conectado ao banco de dados MySQL'); // Exibe mensagem de sucesso
   });
   module.exports = db; // Exporta a conexão para ser usada em outros arquivos 
   