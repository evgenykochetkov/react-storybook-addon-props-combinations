import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { combinations } from './utils'

const propsCombinations = combinations({
  disabled: [false, true],
  children: ['', 'hello world', 'some moderately long text', <b>some other elements</b>]
})

const Decorator = ({children, passedProps}) => (
  <div>
    {children}
    <pre>
      {JSON.stringify(passedProps, null, 2)}
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
