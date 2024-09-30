/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const propsArr = path.split(".");

  return function (obj) {
    let result = obj;

    for (let i = 0; i < propsArr.length; i++) {
      const prop = propsArr[i];

      if (result.hasOwnProperty(prop)) {
        result = result[prop];
      } else {
        result = undefined;
        break;
      }
    }

    return result;
  };
}
