const router = require("express").Router();
const Product = require("../models/product");

//POST request = create a new product
router.post('/products', async (req, res) => {
    try {
        let product = new Product();
        product.title = req.body.title;
        product.description = req.body.description;
        product.photo = req.body.photo;
        product.stockQuantity = req.body.stockQuantity;



        await product.save();

        res.json({
            status: true,
            message: "Succesfully saved"
        });


    } catch (error) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

// GET request = get all products


// GET request =  get a single product


// PUT request = update a single product


// DELETE request = delete a single product



module.exports = router;