import { Schema, model } from "mongoose";
import { Guardian, Student, UserName } from "./student.interface";

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
    // maxlength: [20, "name can not be more than 20"], //inbuild validated system
    trim: true, //to remove blank space
    // validate: {
    //   validator: function (value: string) { //inbuild validated system
    //     const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1); // Nahid
    //     return firstNameStr === value;
    //   },
    //   message: "{VALUE} is not in capitalize formate",
    // },
  },
  lastName: {
    type: String,
    required: true,
    // validate: {
    //   validator: (value: string) => validator.isAlpha(value), //valitae by using custome npm validator package
    //   message:'{VALUE} is not valid'
    // },
  },
  middleName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String },
  fatherOccupation: { type: String },
  fatherContactNo: { type: String },
  motherName: { type: String },
  motherOccupation: { type: String },
  motherContactNo: { type: String },
});

const localGuardianSchema = new Schema({
  name: { type: String },
  occupation: { type: String },
  contactNo: { type: String },
  address: { type: String },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: { type: userNameSchema, required: [true, "Name is required"] },
  gender: {
    type: String,
    enum: {
      values: ["male", "female", "other"],
      message:
        "The gender field can only be one of the following: 'male', 'female', 'other'",
    },
    required: true,
  },
  email: {
    type: String,
    required: true,
    // validate: {
    //   validator: (value: string) => validator.isEmail(value), //valitae by using custome npm validator package
    //   message: "{VALUE} is not email type",
    // },
  },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  presentAddress: { type: String, required: true },
  permanetAddress: { type: String, required: true },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  dateOfBirth: { type: String },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ["active", "blocked"],
    required: true,
    default: "active",
  },
});

export const StudentModel = model("Student", studentSchema);
