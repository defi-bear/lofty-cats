/**
 * It returns true if the email parameter is a valid email address, and false if it's not
 * @param {string} email - The email address to validate.
 * @returns a boolean value.
 */
function validateEmail(email: string) {
  const reg = /\S+@\S+\.\S+/;
  return reg.test(email);
}

export default { validateEmail };
