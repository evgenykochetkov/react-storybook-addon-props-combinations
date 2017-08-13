import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import withPropsCombinations from '../src'

storiesOf('Custom CombinationRenderer example', module)
  .add('Rendering just a component without any wrappers', withPropsCombinations(
    'button',
    {
      disabled: [false, true],
      onClick: [action('clicked')],
      children: ['hello world', <b>some other elements</b>]
    },
    {
      CombinationRenderer: ({Component, props, options}) => (
        <Component {...props} />
      )
    }
  ))
