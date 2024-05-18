import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import studentValidateSchema from "./student.validation";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    // creating schema validation using Joi
    const { error, value } = studentValidateSchema.validate(studentData);

    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        error: error.details,
      });
    }

    // Call service function to save this data
    const result = await StudentServices.createStudentIntoDB(studentData);
    // Send response
    res.status(201).json({
      success: true,
      message: "Student is created successfully",
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
  createStudent,
  getAllStudent,
  getSingleStudent,
};
