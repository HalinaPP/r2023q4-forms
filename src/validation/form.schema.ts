import { string, ref, object, number, mixed, boolean, InferType } from "yup";
import {
  LowercaseLetterPattern,
  NumberPattern,
  SUPPORTED_FORMATS,
  SpecialSymbolPattern,
  UppercaseLetterPattern,
  maxFileSize,
} from "../utils/constants";

const getCharacterValidationError = (str: string) =>
  `Your password must have at least 1 ${str} character`;

const isImageSizeValid = (value: FileList) => {
  const image: File = value[0];
  return image && image.size <= maxFileSize;
};

const isFileTypeValid = (value: FileList) => {
  const image: File = value[0];
  return image && SUPPORTED_FORMATS.includes(image.type);
};

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
    .matches(NumberPattern, getCharacterValidationError("digit"))
    .matches(UppercaseLetterPattern, getCharacterValidationError("uppercase"))
    .matches(LowercaseLetterPattern, getCharacterValidationError("lowercase"))
    .matches(
      SpecialSymbolPattern,
      getCharacterValidationError("special character"),
    ),
  confirmPassword: string()
    .required("Please, type your password again")
    .oneOf([ref("password")], "Passwords doesn't match"),
  accept: boolean(),
  picture: mixed()
    .required("Please, select a picture")
    .test("Max file size", "max file size is 1024 ", (value) => {
      if (!value || !value.length) return true;
      return isImageSizeValid(value as FileList);
    })
    .test(
      "format",
      "Please, select picture of supported formats (jpg, png)",
      (value) => {
        if (!value || !value.length) return true;
        return isFileTypeValid(value as FileList);
      },
    ),

  country: string().required("Country is required"),
});

export interface Person extends InferType<typeof personSchema> {
  gender: Gender;
  base64Image: string | ArrayBuffer | null;
}

export type Gender = "male" | "female";
