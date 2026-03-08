import express from "express"
const routes=express.Router()
import StudentController from "../controller/StudentController"

routes.post("/", StudentController.postStudent)
routes.get("/", StudentController.getAllStudents)
routes.get("/:id", StudentController.getStudentById)
routes.get("/:id", StudentController.UpdateStudent)
routes.get("/:id", StudentController.DeleteStudent)

module.exports=routes