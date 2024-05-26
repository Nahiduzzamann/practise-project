import { Model, Types } from "mongoose";

export type TGuardian = {
  fatherName?: string; // Optional field
  fatherOccupation?: string; // Optional field
  fatherContactNo?: string; // Optional field
  motherName?: string; // Optional field
  motherOccupation?: string; // Optional field
  motherContactNo?: string; // Optional field
};
export type TUserName = {
  firstName: string;
  lastName: string;
  middleName: string;
};
export type LocalGuardian = {
  name?: string; // Optional field
  occupation?: string; // Optional field
  contactNo?: string; // Optional field
  address?: string; // Optional field
};
export type TStudent = {
  user: Types.ObjectId
  id: string;
  name: TUserName;
  email: string;
  gender: "male" | "female" | "other";
  dateOfBirth?: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanetAddress: string;
  guardian: TGuardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
};
// for creating instance
// export type StudentMethods = {
//   isUserExits(id: string): Promise<TStudent | null>;
// };

// export type StudentModel = Model<TStudent, {}, StudentMethods>;

// for creating static
 export interface StudentModel extends Model<TStudent>{
  isUserExists(id:string):Promise<TStudent|null>
}