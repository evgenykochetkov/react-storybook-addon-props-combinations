import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import ErrorDisplay from './ErrorDisplay'

import { combinations } from './utils'

const checkMissingProps = (component, possiblePropsByName) => {
  if (typeof component === 'string') {
    return 'mustProvideAllProps option is not supported for built-in components'
  }

  const componentPropNames = Object.keys(component.propTypes)
  const propNamesWithProvidedValues = Object.keys(possiblePropsByName)
  const missingProps = componentPropNames.filter((pn) => propNamesWithProvidedValues.indexOf(pn) < 0);

  if (missingProps.length) {
    return 'Missing possible values for props: ' + missingProps.join(', ')
  }

  return null
}

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

    const propsCombinations = combinations(possiblePropsByName)

    this.add(storyName, () => {
      if (mustProvideAllProps) {
        const errorMsg = checkMissingProps(component, possiblePropsByName)

        if (errorMsg) {
          return <ErrorDisplay message={errorMsg} />
        }
      }

      return (
        <div>
          {propsCombinations.map((props) => render(component, props, options))}
        </div>
      )
    })
  }
}

export function setDefaults(newDefaults) {
    return Object.assign(defaultOptions, newDefaults)
}
