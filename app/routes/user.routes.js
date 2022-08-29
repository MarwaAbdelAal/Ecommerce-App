const router = require("express").Router()
const userController = require("../controllers/user.controller")
const auth = require("../middleware/auth.middleware")

router.post("/register", userController.register)
router.post("/login", userController.login)
router.get("/", auth, userController.getAllUsers)
router.get("/single/:id", auth, userController.singleUser)
router.delete("/single/:id", auth, userController.delUser)
router.patch("/single/:id", auth, userController.editUser)

router.get("/profile", auth, userController.profile)


module.exports = router