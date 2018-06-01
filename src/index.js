import React from 'react'

import objectHash from 'object-hash'

import { combinations } from './utils'
import DefaultCombinationRenderer from './CombinationRenderer'
import ErrorDisplay from './ErrorDisplay'

export { withOneOfBool } from './modifiers'

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
  CombinationRenderer: DefaultCombinationRenderer,
  showSource: true,
  mustProvideAllProps: false,
  style: {},
  combinationsModifier: x => x,
}

export default function withPropsCombinations (component, possibleValuesByPropName, userOptions) {
  const options = {
    ...defaultOptions,
    ...userOptions
  }

  if (!!options.renderCombination) {
    throw new Error("renderCombination option is deprecated. \nPlease use CombinationRenderer instead. \nSee https://github.com/evgenykochetkov/react-storybook-addon-props-combinations#combinationrenderer")
  }

  const {
    CombinationRenderer,
    combinationsModifier,
    mustProvideAllProps,
  } = options

  return () => {
    if (mustProvideAllProps) {
      const err = checkForMissingProps(component, possibleValuesByPropName)

      if (err) {
        return <ErrorDisplay message={err.message} />
      }
    }

    const propsCombinations = combinationsModifier(combinations(possibleValuesByPropName))

    return (
      <div>
        {propsCombinations.map((props) =>
          <CombinationRenderer
            Component={component}
            props={props}
            options={options}
            key={objectHash(props)}
          />
        )}
      </div>
    )
  }
}


export function setDefaults(newDefaults) {
  return Object.assign(defaultOptions, newDefaults)
}
