import { z } from "zod";

// UserName schema
const userNameValidationSchema = z.object({
  firstName: z.string()
    .max(20, { message: "name can not be more than 20" })
    .trim()
    .refine(value => {
      const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
      return firstNameStr === value;
    }, { message: "First name is not in capitalize format" }),
  lastName: z.string()
    .refine(value => /^[A-Za-z]+$/.test(value), { message: 'Last name is not valid' }),
  middleName: z.string()
});

// Guardian schema
const guardianValidationSchema = z.object({
  fatherName: z.string().optional(),
  fatherOccupation: z.string().optional(),
  fatherContactNo: z.string().optional(),
  motherName: z.string().optional(),
  motherOccupation: z.string().optional(),
  motherContactNo: z.string().optional()
});

// Local Guardian schema
const localGuardianValidationSchema = z.object({
  name: z.string().optional(),
  occupation: z.string().optional(),
  contactNo: z.string().optional(),
  address: z.string().optional()
});

// Student schema
const studentValidationSchema = z.object({
  id: z.string(),
  name: userNameValidationSchema,
  gender: z.enum(["male", "female", "other"]),
  email: z.string().email({ message: '{VALUE} is not email type' }),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).optional(),
  presentAddress: z.string(),
  permanetAddress: z.string(),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  dateOfBirth: z.string().optional(),
  profileImg: z.string().optional(),
  isActive: z.enum(["active", "blocked"]).default("active")
});

// Export the student schema
export const StudentZodSchema = studentValidationSchema;
