const db = require('../config/db'); // Importa a conexão com o banco de dados
// Função para obter todas as transações
const getAllproducts = (req, res) => {
 db.query('SELECT * FROM products', (err, results) => {
 if (err) {
 console.error('Erro ao obter transações:', err);
 res.status(500).send('Erro ao obter transações');
 return;
 }
 res.json(results);
 });
}; 

module.exports = {
    getAllproducts
   };