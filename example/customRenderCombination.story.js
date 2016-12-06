import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Custom renderCombination example', module)
  .addWithPropsCombinations(
    'Rendering just a component without any wrappers',
    'button',
    {
      disabled: [false, true],
      onClick: [action('clicked')],
      children: ['hello world', <b>some other elements</b>]
    },
    {
      renderCombination: (Component, props, options) => <Component {...props} />
    }
  )
