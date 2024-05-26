export type TUser = {
  id: string;
  password: string;
  needPassWordChange: boolean;
  role: "admin" | "student" | "faculty";
  isDeleted: boolean;
  status: "in-progress" | "blocked";
};
