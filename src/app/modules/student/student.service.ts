import { Student } from "./student.interface";
import { StudentModel } from "./student.model";

const createStudentIntoDB = async (student: Student) => {
  const res = await StudentModel.create(student);
  return res;
};
const getAllStudentFromDB = async () => {
  const res = await StudentModel.find();
  return res;
};
const getSingleStudentFromDB = async (id:string) => {
  const res = await StudentModel.findOne({id});
  return res;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB
};