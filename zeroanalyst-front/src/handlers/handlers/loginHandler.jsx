export const LoginHandler = (username, password) => {
  if (username === "abhi@zeroanalyst.com" && password === "Zero123") {
    console.log("Logged In");
    return true;
  } else {
    return false;
  }
};
