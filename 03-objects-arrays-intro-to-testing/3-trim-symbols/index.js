/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === 0) {
    return "";
  }

  if (!size) {
    return string;
  }

  let modifiedStr = "";
  let counter = 1;

  for (let char of string) {
    if (modifiedStr.endsWith(char)) {
      counter++;
    } else {
      counter = 1;
    }

    if (counter <= size) {
      modifiedStr += char;
    }
  }

  return modifiedStr;
}
