const router = require("express").Router()
const productController = require("../controllers/product.controller")
const auth = require("../middleware/auth.middleware")

router.get("/", productController.getAllProducts)
router.post("/add", auth, productController.addProduct)
// router.get("/myproducts", auth, productController.getMyProducts)
router.get("/myproducts", auth, productController.myProducts)
router.get("/single/:id", auth, productController.singleProduct)
router.delete("/single/:id", auth, productController.delProduct)
router.patch("/single/:id", auth, productController.editProduct)

module.exports = router