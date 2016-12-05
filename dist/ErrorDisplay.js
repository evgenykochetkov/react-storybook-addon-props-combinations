'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  padding: 20,
  backgroundColor: 'rgb(187, 49, 49)',
  color: 'rgb(255, 255, 255)',
  fontSize: 20,
  fontFamily: '-apple-system,"San Francisco",Roboto,"Segoe UI","Helvetica Neue","Lucida Grande",sans-serif',
  fontWeight: 600
};

exports.default = function (_ref) {
  var message = _ref.message;
  return _react2.default.createElement(
    'div',
    { style: style },
    message
  );
};