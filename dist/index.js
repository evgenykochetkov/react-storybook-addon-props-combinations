'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.setDefaults = setDefaults;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var _defaultRender = require('./defaultRender');

var _defaultRender2 = _interopRequireDefault(_defaultRender);

var _ErrorDisplay = require('./ErrorDisplay');

var _ErrorDisplay2 = _interopRequireDefault(_ErrorDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkMissingProps = function checkMissingProps(component, possiblePropsByName) {
  if (typeof component === 'string') {
    return 'mustProvideAllProps option is not supported for built-in components';
  }

  var componentPropNames = (0, _keys2.default)(component.propTypes);
  var propNamesWithProvidedValues = (0, _keys2.default)(possiblePropsByName);
  var missingProps = componentPropNames.filter(function (pn) {
    return propNamesWithProvidedValues.indexOf(pn) < 0;
  });

  if (missingProps.length) {
    return 'Missing possible values for props: ' + missingProps.join(', ');
  }

  return null;
};

var defaultOptions = {
  render: _defaultRender2.default,
  showSource: true,
  mustProvideAllProps: false
};

exports.default = {
  addWithPropsCombinations: function addWithPropsCombinations(storyName, component, possiblePropsByName, userOptions) {
    var options = (0, _extends3.default)({}, defaultOptions, userOptions);

    var render = options.render,
        mustProvideAllProps = options.mustProvideAllProps;


    var propsCombinations = (0, _utils.combinations)(possiblePropsByName);

    this.add(storyName, function () {
      if (mustProvideAllProps) {
        var errorMsg = checkMissingProps(component, possiblePropsByName);

        if (errorMsg) {
          return _react2.default.createElement(_ErrorDisplay2.default, { message: errorMsg });
        }
      }

      return _react2.default.createElement(
        'div',
        null,
        propsCombinations.map(function (props) {
          return render(component, props, options);
        })
      );
    });
  }
};
function setDefaults(newDefaults) {
  return (0, _assign2.default)(defaultOptions, newDefaults);
}