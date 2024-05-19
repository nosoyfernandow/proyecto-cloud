const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerName: String,
    items: [String],
    total: Number,
    status: {
        type: String,
        default: 'pending'
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;