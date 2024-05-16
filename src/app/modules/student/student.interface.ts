import { Schema, model, connect } from "mongoose";
export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type Student = {
  name: {
    firstName: string;
    lastName: string;
    middleName: string;
  };
  email: string;
  gender: "male" | "female";
  dateOfBirth: string;
  contactNo: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanetAddress: string;
  guardian: Guardian;
};
