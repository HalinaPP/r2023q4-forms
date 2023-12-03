import { ReactNode } from "react";
import { Gender, Person } from "./validation/form.schema";

export interface ChildrenProps {
  children: ReactNode;
}

export type Fields = {
  [key in keyof Person]: string;
};

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
export enum Forms {
  uncontrolled = "uncontrolled",
  reactHook = "reactHook",
}
export type FilledForm = Forms.uncontrolled | Forms.reactHook | undefined;

export enum Strength {
  poor = "poor",
  medium = "medium",
  strong = "strong",
}
