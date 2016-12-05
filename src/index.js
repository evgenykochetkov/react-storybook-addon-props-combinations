import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { combinations } from './utils'

const DefaultDecorator = ({children}) => (
  <div>
    {children}
    <pre>
      {reactElementToJSXString(children)}
    </pre>
  </div>
)

const defaultOptions = {
    Decorator: DefaultDecorator
}

export default {
  addWithPropsCombinations (storyName, component, possiblePropsByName, userOptions) {

    const options = {
        ...defaultOptions,
        ...userOptions
    }

    const {
        Decorator
    } = options

    const propsCombinations = combinations(possiblePropsByName)

    const componentWithAllPropsCombinations =
      propsCombinations.map((props) => (
        <Decorator>
          {React.createElement(component, props)}
        </Decorator>
      ))

    this.add(storyName, () => (
      <div>
        {componentWithAllPropsCombinations}
      </div>
    ))

  }
}

export function setDefaults(newDefaults) {
    return Object.assign(defaultOptions, newDefaults)
}
