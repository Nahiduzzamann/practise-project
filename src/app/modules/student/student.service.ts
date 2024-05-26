import { TStudent } from "./student.interface";
import { Student } from "./student.model";


const getAllStudentFromDB = async () => {
  const res = await Student.find();
  return res;
};
const getSingleStudentFromDB = async (id: string) => {
  const res = await Student.findOne({ id });
  return res;
};

export const StudentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
