import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { combinations } from './utils'

const propsCombinations = combinations({
  disabled: [false, true],
  children: ['', 'hello world', 'some moderately long text', <b>some other elements</b>]
})

const Decorator = ({children}) => (
  <div>
    {children}
    <pre>
      {reactElementToJSXString(children)}
    </pre>
  </div>
)

storiesOf('Button', module)
  .add('Props Combinations', () => (
    <div>
      {
        propsCombinations.map((props) => (
          <Decorator>
            {React.createElement('button', props)}
          </Decorator>
        ))
      }
    </div>
  ))
