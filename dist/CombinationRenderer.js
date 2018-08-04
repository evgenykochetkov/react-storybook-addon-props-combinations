'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _for = require('babel-runtime/core-js/symbol/for');

var _for2 = _interopRequireDefault(_for);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prettyFormat = require('pretty-format');

var _prettyFormat2 = _interopRequireDefault(_prettyFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reactElement = (0, _for2.default)('react.element');

var transformPreactElement = function transformPreactElement(el) {
  if (!el.preactCompatUpgraded) {
    return el;
  }
  el.props = (0, _extends3.default)({}, el.attributes, {
    children: el.children.map(function (child) {
      if (child.$$typeof === reactElement) {
        return transformPreactElement(child);
      }
      return child;
    })
  });
  return el;
};

exports.default = function (_ref) {
  var Component = _ref.Component,
      props = _ref.props,
      options = _ref.options;

  var el = _react2.default.createElement(Component, props);

  var showSource = options.showSource,
      style = options.style;


  return _react2.default.createElement(
    'div',
    { style: style },
    el,
    showSource && _react2.default.createElement(
      'pre',
      { className: 'source' },
      (0, _prettyFormat2.default)(transformPreactElement(el), {
        plugins: [_prettyFormat2.default.plugins.ReactElement]
      })
    )
  );
};