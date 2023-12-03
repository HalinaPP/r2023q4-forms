export const maxPasswordStrength = 5;
export const SpecialSymbolPattern = /[!@#$%^&*(),.?":{}|<>]/;
export const UppercaseLetterPattern = /[A-Z]/;
export const LowercaseLetterPattern = /[a-z]/;
export const NumberPattern = /[0-9]/;
export const MinPasswordLenght = /(.+){8,}/;

export const PasswordStrengthRequirements = [
  SpecialSymbolPattern,
  UppercaseLetterPattern,
  LowercaseLetterPattern,
  NumberPattern,
  MinPasswordLenght,
];
