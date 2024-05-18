export type Guardian = {
  fatherName?: string;  // Optional field
  fatherOccupation?: string;  // Optional field
  fatherContactNo?: string;  // Optional field
  motherName?: string;  // Optional field
  motherOccupation?: string;  // Optional field
  motherContactNo?: string;  // Optional field
};
export type UserName = {
  firstName: string;
  lastName: string;
  middleName: string;
};
export type LocalGuardian = {
  name?: string;  // Optional field
  occupation?: string;  // Optional field
  contactNo?: string;  // Optional field
  address?: string;  // Optional field
};
export type Student = {
  id: string;
  name: UserName;
  email: string;
  gender: "male" | "female" | "other";
  dateOfBirth?: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanetAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: "active" | "blocked";
};
