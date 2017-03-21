"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combinations = exports.flatMap = undefined;

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require("babel-runtime/helpers/extends");

var _extends4 = _interopRequireDefault(_extends3);

var _toArray2 = require("babel-runtime/helpers/toArray");

var _toArray3 = _interopRequireDefault(_toArray2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flatMap = exports.flatMap = function flatMap(arr, fn) {
  return arr.map(fn).reduce(function (a, b) {
    return a.concat(b);
  });
};

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
var combinations = exports.combinations = function combinations(variationsByField) {
  var fieldNames = (0, _keys2.default)(variationsByField);

  if (!fieldNames.length) return [{}];

  var _combinations = function _combinations(_ref, acc) {
    var _ref2 = (0, _toArray3.default)(_ref),
        fieldName = _ref2[0],
        restFieldNames = _ref2.slice(1);

    var variationsForField = variationsByField[fieldName];

    if (!Array.isArray(variationsForField) || !variationsForField.length) {
      throw new Error("Please provide a non-empty array of possible values for prop " + fieldName);
    }

    var vs = variationsForField.map(function (fieldValue) {
      return (0, _extends4.default)({}, acc, (0, _defineProperty3.default)({}, fieldName, fieldValue));
    });

    if (!restFieldNames.length) {
      return vs;
    } else {
      return flatMap(vs, function (newAcc) {
        return _combinations(restFieldNames, newAcc);
      });
    }
  };

  return _combinations(fieldNames, {});
};