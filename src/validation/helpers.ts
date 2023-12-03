import { ValidationError } from "yup";
import { Fields } from "../types";

const collectErrors = (err: ValidationError): Fields =>
  err.inner.reduce((acc, error) => {
    if (error.path) {
      return {
        ...acc,
        [error.path]: error.message,
      };
    }
    return acc;
  }, {} as Fields);

export default collectErrors;
