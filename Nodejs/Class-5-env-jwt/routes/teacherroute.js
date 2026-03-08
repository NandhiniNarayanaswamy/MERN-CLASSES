const express = require("express")
const router = express.Router();
const teacherController = require("../controller/teacherController")

router.post("/", teacherController.createData);
router.get("/", teacherController.getData);
router.put("/:id", teacherController.updateData);
router.delete("/:id", teacherController.deleteData)
module.exports = router