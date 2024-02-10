const express = require("express");
const router = express.Router();
const contact = require("../controller/contact_controller")

router.route("/contact").post(contact);

module.exports = router;