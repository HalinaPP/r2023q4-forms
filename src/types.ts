import { ReactNode } from "react";
import { Person } from "./validation/form.schema";

export interface ChildrenProps {
  children: ReactNode;
}

export type Fields = {
  [key in keyof Person]: string;
};

type Gender = "male" | "female";

export interface Person2 {
  name: string;
  age: number;
  gender: Gender;
  email: string;
  password: string;
  confirmPassword: string;
  accept: boolean;
  picture: string;
  country: string;
}
