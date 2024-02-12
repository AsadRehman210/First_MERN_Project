const express = require("express");
const router = express.Router();
const {getAllUser,getAllContact, DeleteUser, updateUser, updationCompleted, DeleteContact, getAllServices, deleteService, getForServiceUpdation, updationcompleted, ServiceCreation } = require("../controller/admin_controller");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware")

// ===============================================================================
// AdminUser Router
// ===============================================================================
router.route("/user").get(authMiddleware, adminMiddleware ,getAllUser);

router.route("/user/update/:id").get(authMiddleware, adminMiddleware, updateUser)

router.route("/user/updatedcom/:id").put(authMiddleware, adminMiddleware, updationCompleted)

router.route("/user/delete/:id").delete(authMiddleware, adminMiddleware, DeleteUser)

// ===============================================================================
// AdminContact Router
// ===============================================================================

router.route("/contact").get(authMiddleware, adminMiddleware, getAllContact);
router.route("/contactDel/:id").delete(authMiddleware, adminMiddleware, DeleteContact);

// ===============================================================================
// AdminService Router
// ===============================================================================

router.route("/service").get(authMiddleware, adminMiddleware,getAllServices)
router.route("/deleteService/:id").delete(authMiddleware, adminMiddleware,deleteService)

router.route("/service/update/:id").get(authMiddleware, adminMiddleware,getForServiceUpdation)

router.route("/service/updatedCom/:id").put(authMiddleware, adminMiddleware, updationcompleted);

router.route("/service/created").post(authMiddleware, adminMiddleware, ServiceCreation)



module.exports = router;