const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Conectar a la base de datos MongoDB (reemplaza con tu cadena de conexión real)
const mongoURI = 'mongodb://localhost:27017/ordersDB'; // O tu cadena de conexión de MongoDB Atlas
mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Definir el esquema y el modelo de pedido
const orderSchema = new mongoose.Schema({
    customerName: String,
    items: [String],
    total: Number
});

const Order = mongoose.model('Order', orderSchema);

// Rutas CRUD
app.get('/api/orders', async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

app.post('/api/orders', async (req, res) => {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
});

app.delete('/api/orders/:id', async (req, res) => {
    await Order.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});