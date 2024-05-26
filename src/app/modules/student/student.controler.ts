import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const getAllStudent = async (req: Request, res: Response) => {
  try {
    // Call service function to get all students
    const result = await StudentServices.getAllStudentFromDB();
    // Send response
    res.status(200).json({
      success: true,
      message: "Students retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: error,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;
    // Call service function to get a single student
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    // Send response
    res.status(200).json({
      success: true,
      message: "Student retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: error,
    });
  }
};
 
export const StudentControllers = {
  getAllStudent,
  getSingleStudent,
};
