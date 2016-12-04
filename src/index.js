import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { combinations } from './utils'

const Decorator = ({children}) => (
  <div>
    {children}
    <pre>
      {reactElementToJSXString(children)}
    </pre>
  </div>
)

export default {
  addWithPropsCombinations (storyName, component, possiblePropsByName, options = {}) {

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
