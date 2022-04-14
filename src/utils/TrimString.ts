/**
 * "If the string is longer than the specified length, return a substring of
 * the string up to the specified length, otherwise return the string."
 *
 * @param {string} str - The string to trim.
 * @param {number} length - The length of the string to trim.
 * @returns A function that takes a string and a number and returns a string.
 */
function trimString(str: string, length: number): string {
  if (str && str.length > length) {
    return `${str.substring(0, length)}...`;
  }
  return str;
}

export default trimString;
