import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { combinations } from './utils'

const defaultRender = (component, props, options) => {
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

const defaultOptions = {
  render: defaultRender,
  showSource: true,
  mustProvideAllProps: false,
}

export default {
  addWithPropsCombinations (storyName, component, possiblePropsByName, userOptions) {
    const options = {
      ...defaultOptions,
      ...userOptions
    }

    const {
      render,
      mustProvideAllProps,
    } = options

    if (mustProvideAllProps) {
      if (typeof component === 'string') {
        throw new Error('mustProvideAllProps option is not supported for built-in components')
      }

      const componentPropNames = Object.keys(component.propTypes)
      const propNamesWithProvidedValues = Object.keys(possiblePropsByName)
      const missingProps = componentPropNames.filter((pn) => propNamesWithProvidedValues.indexOf(pn) < 0);

      if (missingProps.length) {
        throw new Error(storyName + ': Missing possible values for props: ' + missingProps.join(', '))
      }
    }

    const propsCombinations = combinations(possiblePropsByName)

    this.add(storyName, () => (
      <div>
        {propsCombinations.map((props) => render(component, props, options))}
      </div>
    ))
  }
}

export function setDefaults(newDefaults) {
    return Object.assign(defaultOptions, newDefaults)
}
