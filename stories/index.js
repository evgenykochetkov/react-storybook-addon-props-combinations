import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { combinations } from './utils'

const propsCombinations = combinations({
  disabled: [false, true],
  children: ['', 'hello world', 'some moderately long text', <b>some other elements</b>]
})

const replacer = (key, value) => {
  if (React.isValidElement(value)) {
    return reactElementToJSXString(value)
  }
  return value;
}

const Decorator = ({children, passedProps}) => (
  <div>
    {children}
    <pre>
      {JSON.stringify(passedProps, replacer, 2)}
    </pre>
  </div>
)

storiesOf('Button', module)
  .add('Props Combinations', () => (
    <div>
      {
        propsCombinations.map((props) => (
          <Decorator passedProps={props}>
            {React.createElement('button', props)}
          </Decorator>
        ))
      }
    </div>
  ))
