const Inventory = require("../models/Inventory");

// @desc Get all products & get all products that have low quantity
// @route GET /products
// @route GET /products?lt=100
const getAllProducts = async (req, res) => {
    const { lt } = req.query;

    try {
        const products = await Inventory.find({});

        if (!products.length) {
            return res.status(500).json({ message: "No product" });
        }

        if (lt) {
            const lowQuantityProducts = await Inventory.find({ instock: { $lt: Number(lt) } });
            return res.status(200).json({ lowQuantityProducts });
        }

        return res.status(200).json({ products });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getAllProducts };