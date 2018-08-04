import React from 'react';
import prettyFormat from 'pretty-format';

const reactElement = Symbol.for('react.element');

const transformPreactElement = (el) => {
  if (!el.preactCompatUpgraded) {
    return el;
  }
  el.props = {
    ...el.attributes,
    children: el.children.map(child => {
      if (child.$$typeof === reactElement) {
        return transformPreactElement(child);
      }
      return child;
    }),
  };
  return el;
};

export default ({Component, props, options}) => {
  const el = React.createElement(Component, props)

  const {
    showSource,
    style
  } = options

  return (
    <div style={style}>
      {el}
      {showSource && (
        <pre className="source">
          {prettyFormat(transformPreactElement(el), {
            plugins: [prettyFormat.plugins.ReactElement],
          })}
        </pre>
      )}
    </div>
  )
}
