const express = require("express");
const router = express.Router();
const {getAllUser,getAllContact, DeleteUser, updateUser, updationCompleted, DeleteContact } = require("../controller/admin_controller");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware")


router.route("/user").get(authMiddleware, adminMiddleware ,getAllUser);

router.route("/user/update/:id").get(authMiddleware, adminMiddleware, updateUser)

router.route("/user/updatedcom/:id").put(authMiddleware, adminMiddleware, updationCompleted)

router.route("/user/delete/:id").delete(authMiddleware, adminMiddleware, DeleteUser)

router.route("/contact").get(authMiddleware, adminMiddleware, getAllContact);
router.route("/contactDel/:id").delete(authMiddleware, adminMiddleware, DeleteContact);



module.exports = router;