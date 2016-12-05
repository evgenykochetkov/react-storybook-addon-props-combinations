import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

export default (component, props, options) => {
  const el = React.createElement(component, props)

  const {
    showSource
  } = options

  return (
    <div>
      {el}
      {showSource && (
        <pre>
          {reactElementToJSXString(el)}
        </pre>
      )}
    </div>
  )
}
