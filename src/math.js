/**
 * getMinFromRatio
 * 
 * @description
 * 
 * @param {number} min 
 * @param {string} max 
 * 
 * @return {string}
 */
export const getMinFromRatio = (min, max) => {
  // if negative value then reverse logic
  return min < 0 ? getNumber(max) * (min * -1) : getNumber(max) / min;
}

/**
 * getMaxFromRatio
 * 
 * @description
 * 
 * @param {string} min 
 * @param {number} max 
 * 
 * @return {string}
 */
export const getMaxFromRatio = (max, min) => {
  // if negative value then reverse logic
  return max < 0 ? getNumber(min) / (max * -1) : getNumber(min) * max;
}

/**
 * isUnitRatio
 * 
 * @description
 * 
 * @param {string|number} x 
 * 
 * @return {boolean}
 */
export const isUnitRatio = x => {
  return getUnit(x) === '';
}

/**
 * getUnit
 * 
 * @description
 * 
 * @param {string} x 
 * 
 * @return {string}
 */
export const getUnit = x => {
  return String(x).replace(/^-?[0-9.]+/g, '');
}

/**
 * getNumber
 * 
 * @description
 * 
 * @param {string} x 
 * 
 * @return {number}
 */
export const getNumber = x => {
  return Number(String(x).replace(/[a-zA-Z]+/g, ''));
}

/**
 * getUnitRem
 * 
 * @description
 * 
 * @param {string} x 
 * @param {number} rootRem 
 * 
 * @return {string}
 */
export const getUnitRem = (x, rootRem) => {
  return getUnit(x) === 'px' ? `${getNumber(x) / rootRem}rem` : x;
}

/**
 * getRoundNumber
 * 
 * @description
 * 
 * @param {number} x
 * @param {number} rounding
 * 
 * @return {number}
 */
export const getRoundNum = (x, rounding) => {
  // get decimals as a tenth
  const arr = Array.from({ length: rounding });
  const decimals = arr.reduce((result) => {
    result = result * 10;
    return result;
  }, 1);

  // return rounded value to x decimal points
  return Math.round(x * decimals) / decimals;
}

/**
 * getArray
 * 
 * @description
 * 
 * @param {string|number|array|object} x 
 *
 * @return {array}
 */
export const getArray = x => {
  return Array.isArray(x) ? x : [x];
}
