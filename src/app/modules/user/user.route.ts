import express from "express";
import { UserControlers } from "./user.controler";

const router = express.Router();

// will call controler function
router.post("/create-User", UserControlers.createStudent());


export const UserRoutes =router