import { string, ref, object, number, mixed, boolean, InferType } from "yup";

const getCharacterValidationError = (str: string) =>
  `Your password must have at least 1 ${str} character`;

export const personSchema = object({
  name: string()
    .matches(/^[A-Z][a-z]+/, {
      excludeEmptyString: true,
      message: "Name must start from the uppercase letter",
    })
    .required("Name is required"),
  age: number().min(0).max(130),
  gender: mixed()
    .oneOf(["male", "female"] as const)
    .defined(),
  email: string().nullable().email(),
  password: string()
    .required("Please enter a password")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      getCharacterValidationError("special character"),
    ),
  confirmPassword: string()
    .required("Please type your password again")
    .oneOf([ref("password")], "Passords doesn't match"),
  accept: boolean(),
  picture: string(),
  country: string().defined(),
});

export interface Person extends InferType<typeof personSchema> {
  gender: Gender;
}

export type Gender = "male" | "female";
