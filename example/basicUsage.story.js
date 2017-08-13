import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import withPropsCombinations from '../src'

storiesOf('Basics', module)
  .add('Standard usage', withPropsCombinations(
    'button',
    {
      disabled: [false, true],
      onClick: [action('clicked')],
      children: ['hello world', <b>some elements</b>]
    }
  ))
  .add('Hide source', withPropsCombinations(
    'button',
    {
      disabled: [false, true],
      onClick: [action('clicked')],
      children: ['hello world', <b>some elements</b>]
    },
    {
      showSource: false,
    }
  ))
