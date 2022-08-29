const router = require("express").Router()
const userController = require("../controllers/user.controller")

router.get("/", userController.getAllUsers)
router.post("/register", userController.register)
router.get("/single/:id", userController.singleUser)
router.delete("/single/:id", userController.delUser)
router.patch("/single/:id", userController.editUser)

module.exports = router