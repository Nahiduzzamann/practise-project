import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

// Create the Mongoose schema
const userSchema = new Schema<TUser>(
  {
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    needPassWordChange: { type: Boolean, default: true },
    role: { type: String, enum: ["admin", "student", "faculty"] },
    isDeleted: { type: Boolean, default: false },
    status: { type: String, enum: ["in-progress", "blocked"] },
  },
  {
    timestamps: true,
  }
);

// Create and export the model
const UserModel = model<TUser>("User", userSchema);
export default UserModel;
