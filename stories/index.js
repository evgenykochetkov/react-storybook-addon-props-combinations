import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Button', module)
  .addWithPropsCombinations(
    'Props Combinations',
    'button',
    {
      disabled: [false, true],
      children: ['hello world', <b>some other elements</b>]
    }
  )
