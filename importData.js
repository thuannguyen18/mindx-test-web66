const mongoose = require("mongoose");

const Inventory = require("./models/Inventory");
const Order = require("./models/Order");
const User = require("./models/User");

const inventoryJson = require("./inventory.json");
const ordersJson = require("./orders.json");
const usersJson = require("./users.json");

const importData = async () => {
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/myDB");
        await Inventory.deleteMany();
        await Inventory.create(inventoryJson);
        await Order.deleteMany();
        await Order.create(ordersJson);
        await User.deleteMany();
        await User.create(usersJson);
        console.log("success");
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

importData();