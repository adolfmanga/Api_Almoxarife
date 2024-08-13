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

const addproducts = (req, res) => {
    const { id, nome_do_produto, descricao_do_produto, categoria_do_produto, preco_do_produto, Quantidade_em_estoque, data_de_validade} = req.body;
    db.query
    ('INSERT INTO products (id, nome_do_produto, descricao_do_produto, categoria_do_produto, preco_do_produto, Quantidade_em_estoque, data_de_validade) VALUES (?, ?, ?, ?, ?, ?, ?)',
    
    [id, nome_do_produto, descricao_do_produto, categoria_do_produto, preco_do_produto, Quantidade_em_estoque, data_de_validade],
    (err, results) => {
    if (err) {
    console.error('Erro ao adicionar produto:', err);
    res.status(500).send('Erro ao adicionar produto');
    return;
    }
    res.status(201).send('produto adicionada com sucesso');
    }
    );};
   
// Função para atualizar uma transação existente (substituição completa)
const updateproductsPut = (req, res) => {
    const { id } = req.params;
    const { nome_do_produto, descricao_do_produto, categoria_do_produto, preco_do_produto, Quantidade_em_estoque, data_de_validade} = req.body;
    db.query(
    'UPDATE products SET nome_do_produto = ?, descricao_do_produto = ?, categoria_do_produto = ?, preco_do_produto = ?, Quantidade_em_estoque = ?, data_de_validade = ? WHERE id = ?' ,
    [nome_do_produto, descricao_do_produto, categoria_do_produto, preco_do_produto, Quantidade_em_estoque, data_de_validade, id],
    (err, results) => {
    if (err) {
    console.error('Erro ao atualizar o produto:', err);
    res.status(500).send('Erro ao atualizar produto');
    return;
    }
    res.send('produto atualizado com sucesso');
    }
    );
   };
// Função para atualizar uma transação existente (atualização parcial)
const updateproductsPatch = (req, res) => {
    const { id } = req.params;
    const fields = req.body;
    const query = [];
    const values = [];
    for (const [key, value] of Object.entries(fields)) {
    query.push(`${key} = ?`);
    values.push(value);
    }
    values.push(id);
    db.query(
    `UPDATE products SET ${query.join(', ')} WHERE id = ?`,
    values,
    (err, results) => {
    if (err) {
    console.error('Erro ao atualizar produto:', err);
    res.status(500).send('Erro ao atualizar produto');
    return;
    }
    res.send('produto atualizada com sucesso');
    }
    );
   };

   // Função para deletar uma transação existente
const deleteproducts = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM products WHERE id = ?', [id], (err, results) => {
    if (err) {
    console.error('Erro ao deletar produto:', err);
    res.status(500).send('Erro ao deletar produto');
    return;
    }
    res.send('produto deletado com sucesso');
    });
   };


   module.exports = {
    getAllproducts,
    addproducts,
    updateproductsPut,
    updateproductsPatch,
    deleteproducts
   }; 
   
   