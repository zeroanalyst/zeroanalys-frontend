export const validateUsername = (username) => {
  if (username === "") {
    return [true, "This field cannot be empty."];
  }

  return [false, "Username is  Validated."];
};

export const validatePassword = (password) => {
  if (password === "") {
    return [true, "This field cannot be empty."];
  }

  return [false, "Password is  Validated."];
};
