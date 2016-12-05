import React from 'react';

import { combinations } from './utils'
import defaultRender from './defaultRender'
import ErrorDisplay from './ErrorDisplay'

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
