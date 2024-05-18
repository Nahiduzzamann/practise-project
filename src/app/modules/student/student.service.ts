import { TStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudentIntoDB = async (studentData: TStudent) => {
  if (await Student.isUserExists(studentData.id)) {
    throw new Error("User already exists!");
  }

  const res = await Student.create(studentData); //build in static method

 

  // const student = new Student(studentData); // create instance

  // if (await student.isUserExits) {
  //   throw new Error("User already exists!");
  // }

  // const res = await student.save();
  return res;
};
const getAllStudentFromDB = async () => {
  const res = await Student.find();
  return res;
};
const getSingleStudentFromDB = async (id: string) => {
  const res = await Student.findOne({ id });
  return res;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
