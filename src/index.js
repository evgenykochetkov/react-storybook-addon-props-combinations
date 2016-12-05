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
  showSource: true
}

export default {
  addWithPropsCombinations (storyName, component, possiblePropsByName, userOptions) {

    const options = {
      ...defaultOptions,
      ...userOptions
    }

    const {
      render
    } = options

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
