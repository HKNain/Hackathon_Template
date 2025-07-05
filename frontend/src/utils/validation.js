export const isRequired = (value) => value.trim() !== "";

export const isEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isStrongPassword = (password) =>
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);

export const passwordsMatch = (pass, confirmPass) =>
  pass === confirmPass;

export const isValidName = (name) =>
  /^[A-Za-z\s]+$/.test(name.trim());