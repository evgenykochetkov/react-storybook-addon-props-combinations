import React from 'react';
import prettyFormat from 'pretty-format';
import reactElementPlugin from 'pretty-format/build/plugins/ReactElement';

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
    showSource
  } = options

  return (
    <div>
      {el}
      {showSource && (
        <pre>
          {prettyFormat(transformPreactElement(el), {
            plugins: [reactElementPlugin],
          })}
        </pre>
      )}
    </div>
  )
}
