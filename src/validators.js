export const required = value => (value ? undefined : "Required");
export const nonEmpty = value =>
  value.trim() !== "" ? undefined : "Cannot be empty";
export const email = value =>
  /^\S+@\S+$/.test(value) ? undefined : "Valid email required";
export const isTrimmed = value =>
  value.trim() === value ? undefined : "Cannot start or end with whitespace";
export const length = length => value => {
  if (length.min && value.length < length.min) {
    return `Must be at least ${length.min} characters`;
  } else if (length.max && value.length > length.max) {
    return `Must be less than ${length.max} charaters`;
  }
};
