const router = require("express").Router()
const productController = require("../controllers/product.controller")

router.get("/", productController.getAllProducts)
router.post("/add", productController.addProduct)
router.get("/single/:id", productController.singleProduct)
router.delete("/single/:id", productController.delProduct)
router.patch("/single/:id", productController.editProduct)

module.exports = router