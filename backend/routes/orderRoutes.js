const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Ruta para crear un nuevo pedido
router.post('/orders', orderController.createOrder);

// Ruta para obtener todos los pedidos
router.get('/orders', orderController.getAllOrders);

// Ruta para obtener un pedido por su ID
router.get('/orders/:id', orderController.getOrderById);

// Ruta para actualizar un pedido existente
router.put('/orders/:id', orderController.updateOrder);

// Ruta para eliminar un pedido existente
router.delete('/orders/:id', orderController.deleteOrder);

module.exports = router;