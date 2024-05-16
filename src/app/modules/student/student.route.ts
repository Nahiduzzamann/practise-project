import express from "express";
import { StudentControllers } from "./student.controler";

const router = express.Router();

// will call controler function
router.post("/create-student", StudentControllers.createStudent);
router.get("/", StudentControllers.getAllStudent);
router.get("/:studentId", StudentControllers.getSingleStudent);


export const StudentRoutes =router