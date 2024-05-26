import config from "../../config";
import { TStudent } from "../student/student.interface";
import { TUser } from "./user.interface";
import UserModel from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  let userData: Partial<TUser> = {};

  if (!password) {
    password = config.default_password as string;
  } else {
    userData.password = password;
  }
  userData.role = "student";
  userData.id = "2000000393489";

  const newUser = await UserModel.create(userData);
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await UserModel.create(studentData);
    return newStudent
  }
  
};

export const UserServices = {
  createStudentIntoDB,
};
