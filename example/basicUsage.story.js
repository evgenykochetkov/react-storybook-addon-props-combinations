import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Basics', module)
  .addWithPropsCombinations(
    'Standard usage',
    'button',
    {
      disabled: [false, true],
      onClick: [action('clicked')],
      children: ['hello world', <b>some other elements</b>]
    }
  )
  .addWithPropsCombinations(
    'Hide source',
    'button',
    {
      disabled: [false, true],
      onClick: [action('clicked')],
      children: ['hello world', <b>some other elements</b>]
    },
    {
      showSource: false,
    }
  )
