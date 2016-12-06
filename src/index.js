import React from 'react'

import { combinations } from './utils'
import defaultRenderCombination from './renderCombination'
import ErrorDisplay from './ErrorDisplay'

const checkForMissingProps = (component, possibleValuesByPropName) => {
  if (typeof component === 'string') {
    return new Error('mustProvideAllProps option is not supported for built-in components')
  }

  const componentProps = Object.keys(component.propTypes)
  const propsWithProvidedValues = Object.keys(possibleValuesByPropName)
  const missingProps = componentProps.filter((pn) => propsWithProvidedValues.indexOf(pn) < 0)

  if (missingProps.length) {
    return new Error('Missing possible values for props: ' + missingProps.join(', '))
  }

  return null
}

const defaultOptions = {
  renderCombination: defaultRenderCombination,
  showSource: true,
  mustProvideAllProps: false,
}

export default {
  addWithPropsCombinations (storyName, component, possibleValuesByPropName, userOptions) {
    const options = {
      ...defaultOptions,
      ...userOptions
    }

    const {
      renderCombination,
      mustProvideAllProps,
    } = options

    const propsCombinations = combinations(possibleValuesByPropName)

    this.add(storyName, () => {
      if (mustProvideAllProps) {
        const err = checkForMissingProps(component, possibleValuesByPropName)

        if (err) {
          return <ErrorDisplay message={err.message} />
        }
      }

      return (
        <div>
          {propsCombinations.map((props) => renderCombination(component, props, options))}
        </div>
      )
    })
  }
}

export function setDefaults(newDefaults) {
  return Object.assign(defaultOptions, newDefaults)
}
