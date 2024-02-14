export function validateEmail(email) {
  var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email)
    ? { message: null }
    : { message: "Looks like there was an issue with the provided email." };
}

// export function validatePassword(password) {
//   const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/;
//   return regex.test(password);
// }

// please write me a validate password function that takes this regex /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/ and returns a message with a relevant error message of the piece of the password that the user is missing.

export function validatePassword(password) {
  const hasNumber = /\d/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasSpecial = /[!@#$%^&*()\-+.]/.test(password);
  let message = "";
  if (!hasNumber) {
    message += "a number, ";
  }
  if (!hasLowerCase) {
    message += "a lowercase letter, ";
  }
  if (!hasUpperCase) {
    message += "an uppercase letter, ";
  }
  if (!hasSpecial) {
    message += "a special character, ";
  }
  if (password.length < 6) {
    message += "at least 6 characters, ";
  }
  if (password.length > 20) {
    message += "no more than 20 characters, ";
  }
  return { message };
}
