import express from "express";
import { StudentControllers } from "./student.controler";

const router = express.Router();

// will call controler function
router.post("/create-student", StudentControllers.createStudent);


export const StudentRoutes =router