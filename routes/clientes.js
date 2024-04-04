const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Ruta para mostrar todos los clientes
router.get('/clientes', clienteController.mostrar);

// Ruta para crear un nuevo cliente
router.post('-/clientes', clienteController.crear);

module.exports = router;
