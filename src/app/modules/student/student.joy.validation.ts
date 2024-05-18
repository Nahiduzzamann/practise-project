import Joi from "joi";

// UserName Schema
const userNameValidateSchema = Joi.object({
  firstName: Joi.string().trim().max(20).required(),

  lastName: Joi.string()
    .required()
    .pattern(/^[A-Za-z]+$/, "{VALUE} is not valid"), // Using Joi regex to validate alphabetic characters
  middleName: Joi.string().required(),
});

// Guardian Schema
const guardianValidateSchema = Joi.object({
  fatherName: Joi.string().optional(),
  fatherOccupation: Joi.string().optional(),
  fatherContactNo: Joi.string().optional(),
  motherName: Joi.string().optional(),
  motherOccupation: Joi.string().optional(),
  motherContactNo: Joi.string().optional(),
});

// LocalGuardian Schema
const localGuardianValidateSchema = Joi.object({
  name: Joi.string().optional(),
  occupation: Joi.string().optional(),
  contactNo: Joi.string().optional(),
  address: Joi.string().optional(),
});

// Student Schema
const studentValidateSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameValidateSchema.required(),
  gender: Joi.string().valid("male", "female", "other").required().messages({
    "any.only":
      "The gender field can only be one of the following: 'male', 'female', 'other'",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "{VALUE} is not email type",
  }),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string()
    .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
    .optional(),
  presentAddress: Joi.string().required(),
  permanetAddress: Joi.string().required(),
  guardian: guardianValidateSchema.required(),
  localGuardian: localGuardianValidateSchema.required(),
  dateOfBirth: Joi.string().optional(),
  profileImg: Joi.string().optional(),
  isActive: Joi.string()
    .valid("active", "blocked")
    .required()
    .default("active"),
});

export default studentValidateSchema;
