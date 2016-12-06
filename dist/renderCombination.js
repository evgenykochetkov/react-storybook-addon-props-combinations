'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactElementToJsxString = require('react-element-to-jsx-string');

var _reactElementToJsxString2 = _interopRequireDefault(_reactElementToJsxString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (component, props, options) {
  var el = _react2.default.createElement(component, props);

  var showSource = options.showSource;


  return _react2.default.createElement(
    'div',
    null,
    el,
    showSource && _react2.default.createElement(
      'pre',
      null,
      (0, _reactElementToJsxString2.default)(el)
    )
  );
};