import { Strength } from "../types";
import { PasswordStrengthRequirements, maxPasswordStrength } from "./constants";

export const isStringMatchPattern = (str: string, pattern: RegExp) =>
  str.match(pattern);

export const calculatePasswordStrength = (strengthCount: number) => {
  if (strengthCount === maxPasswordStrength) {
    return Strength.strong;
  }
  if (strengthCount > maxPasswordStrength / 2) {
    return Strength.medium;
  }

  return Strength.poor;
};

export const countMatchedStrengthRequirements = (password: string): number => {
  let strengthCount = 0;

  PasswordStrengthRequirements.forEach((pattern: RegExp) => {
    if (isStringMatchPattern(password, pattern)) {
      strengthCount += 1;
    }
  });
  return strengthCount;
};

export const convertImageToBase64 = async (
  blob: Blob,
  setBase64Image: React.Dispatch<
    React.SetStateAction<string | ArrayBuffer | null>
  >,
) => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);

  reader.onload = () => {
    setBase64Image(reader.result);
  };
};
