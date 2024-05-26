import { z } from "zod";

// Define the Zod schema for the user
const userValidationSchema = z.object({
  password: z.string().nonempty().optional(),
});

export const UserValidation = {
  userValidationSchema,
};
