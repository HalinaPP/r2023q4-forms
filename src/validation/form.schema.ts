import { string, ref, object, number, mixed, boolean, InferType } from "yup";

const getCharacterValidationError = (str: string) =>
  `Your password must have at least 1 ${str} character`;

export const personSchema = object({
  name: string()
    .matches(/^[A-Z][a-z]+/, {
      excludeEmptyString: true,
      message: "Name must start from the uppercase letter",
    })
    .required("Please, enter your name"),
  age: number()
    .min(0, "Please, enter an age number more or equal 0")
    .max(130, "Please, enter an age number less or equal 0")
    .required("Please, enter an age number from 0 to 130"),
  gender: mixed()
    .oneOf(["male", "female"] as const)
    .required("Gender is required"),
  email: string().nullable().email().required("Email is required"),
  password: string()
    .required("Please, enter a password")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      getCharacterValidationError("special character"),
    ),
  confirmPassword: string()
    .required("Please, type your password again")
    .oneOf([ref("password")], "Passwords doesn't match"),
  accept: boolean(),
  picture: string().required("Please, select a picture"),
  country: string().required("Country is required"),
});

export interface Person extends InferType<typeof personSchema> {
  gender: Gender;
}

export type Gender = "male" | "female";
