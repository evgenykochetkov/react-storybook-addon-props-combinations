const flatMap = (arr, fn) => arr.map(fn).reduce((a, b) => a.concat(b))

/**
 * Takes an object with a shape of {fieldName: arrayOfPossibleValues}
 * and returns an array of objects with all possible combinations
 * of field values
 *
 * eg: passing {foo: [1, 2], bar: ['a', 'b']} will return
 * [
 *  {foo: 1, bar: "a"},
 *  {foo: 1, bar: "b"},
 *  {foo: 2, bar: "a"},
 *  {foo: 2, bar: "b"}
 * ]
 */
export const combinations = (variationsByField) =>
  (function _combinations ([fieldName, ...restFieldNames], acc) {
    const variationsForField = variationsByField[fieldName]

    if (!variationsForField) return acc;

    const vs = variationsForField.map((fieldValue) => ({...acc, [fieldName]: fieldValue}))

    if (!restFieldNames.length) {
      return vs;
    } else {
      return flatMap(vs, (newAcc) => _combinations(restFieldNames, newAcc))
    }
  })(Object.keys(variationsByField), {})
