const express = require("express");
const router = express.Router();
const {home, register, login, userInformation} = require("../controller/auth_controller");
const authMiddleware = require("../middleware/authMiddleware");
// const validatorSchema = require("../validator/auth_validator")
// const validate = require("../middleware/validator_middleware")

router.route("/").get(home)

router.route("/register").post(register)

router.route("/login").post(login);
router.route("/userData").get(authMiddleware, userInformation);



module.exports = router;