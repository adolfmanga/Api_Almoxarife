
const express = require('express'); // Importa o framework Express

const router = express.Router(); // Cria um novo roteador

const productsController = require('../controllers/productsController'); // Importa o controlador de transações

// Definindo uma rota para obter todas as transações

router.get('/', productsController.getAllproducts);

router.post('/', productsController.addproducts); 

// Definindo uma rota para atualizar uma transação existente (substituição completa)
router.put('/:id', productsController.updateproductsPut);

// Definindo uma rota para atualizar uma transação existente (atualização parcial)
router.patch('/:id', productsController.updateproductsPatch);

router.delete('/:id', productsController.deleteproducts);

// Exportando o roteador
module.exports = router; 
