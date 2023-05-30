const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    item: String,
    price: Number,
    quantity: Number
});

module.exports = mongoose.model("Order", OrderSchema);