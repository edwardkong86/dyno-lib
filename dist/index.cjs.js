function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
require('prop-types');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Button = function Button(props) {
  var _React$useState = React.useState('');

  var name = props.name,
      id = props.id,
      item = props.item,
      error = props.error,
      managedCallback = props.managedCallback,
      disabled = props.disabled,
      text = props.text;

  var _ref = item || {
    label: 'Default'
  },
      action = _ref.action,
      label = _ref.label;

  var onClick = function onClick() {
    return managedCallback(action === null || action === void 0 ? void 0 : action.actionURL);
  };

  var disabled_dynamo = error && Object.keys(error).length > 0 || false;
  var className = disabled || disabled_dynamo ? 'button-disabled' : 'button';

  var renderText = function renderText() {
    return text ? text : label;
  };

  return /*#__PURE__*/React.createElement("button", _extends({
    name: name,
    id: id,
    className: className,
    disabled: disabled || disabled_dynamo,
    onClick: onClick
  }, props), renderText());
};

exports.Button = Button;
//# sourceMappingURL=index.cjs.js.map
