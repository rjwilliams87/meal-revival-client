export const required = value => (value ? undefined : "Required");
export const nonEmpty = value =>
  value.trim() !== "" ? undefined : "Cannot be empty";
export const email = value =>
  /^\S+@\S+$/.test(value) ? undefined : "Email required";
export const isTrimmed = value =>
  value.trim() === value ? undefined : "No spaces";
export const length = length => value => {
  if (length.min && value.length < length.min) {
    return `Too short`;
  } else if (length.max && value.length > length.max) {
    return `Too long`;
  }
};
