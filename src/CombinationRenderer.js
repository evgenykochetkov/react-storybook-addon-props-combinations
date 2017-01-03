import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

export default ({Component, props, options}) => {
  const el = React.createElement(Component, props)

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
