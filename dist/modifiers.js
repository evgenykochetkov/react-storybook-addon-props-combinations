'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withOneOfBool = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withOneOfBool = exports.withOneOfBool = function withOneOfBool(boolPropNames) {
  return function (combinations) {
    return combinations.concat((0, _utils.flatMap)(combinations, function (c) {
      return boolPropNames.map(function (boolPropName) {
        return (0, _extends4.default)({}, c, (0, _defineProperty3.default)({}, boolPropName, true));
      });
    }));
  };
};