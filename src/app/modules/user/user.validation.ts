import { z } from "zod";

// Define the Zod schema for the user
const userValidationSchema = z.object({
  id: z.string().nonempty(),
  password: z.string().nonempty(),
  needPassWordChange: z.boolean().default(true),
  role: z.enum(["admin", "student", "faculty"]),
  isDeleted: z.boolean().default(false),
  status: z.enum(["in-progress", "blocked"]).default("in-progress"),
});

export const UserValidation = {
  userValidationSchema,
};
