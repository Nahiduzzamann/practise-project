import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
    try {
      const {password, student: studentData } = req.body;
      // // creating schema validation using Joi
      // const { error, value } = studentValidateSchema.validate(studentData);
  
  
      // if (error) {
      //   return res.status(400).json({
      //     success: false,
      //     message: "Validation error",
      //     error: error.details,
      //   });
      // }
  
  
  
      // creating schema validation using zod
//   const zodValidatedData = StudentZodSchema.parse(studentData)
  
      // Call service function to save this data
      const result = await UserServices.createStudentIntoDB(password,studentData); 
      // Send response
      res.status(201).json({
        success: true,
        message: "Student is created successfully",
        data: result,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || "Something went wrong",
        error: error,
      });
    }
  };

  export const UserControlers ={
    createStudent
  }