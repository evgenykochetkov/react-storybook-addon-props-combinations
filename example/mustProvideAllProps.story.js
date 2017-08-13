import React from 'react';
import pt from 'prop-types';
import { storiesOf } from '@storybook/react';

import withPropsCombinations from '../src'

class SomeComponent extends React.Component {
  static propTypes = {
    foo: pt.number.isRequired,
    bar: pt.string.isRequired,
    baz: pt.bool.isRequired,
  }

  render () {
    const { foo, bar, baz } = this.props

    return (
      <div>
        {foo} | {bar} | {baz.toString()}
      </div>
    )
  }
}

storiesOf('mustProvideAllProps example', module)
  .add('With all props provided', withPropsCombinations(
    SomeComponent,
    {
      foo: [1, 2],
      bar: ['a', 'b'],
      baz: [false, true],
    },
    {
      mustProvideAllProps: true,
    }
  ))
  .add('When values for some props are not provided', withPropsCombinations(
    SomeComponent,
    {
      // not providing possible values for foo and bar
      baz: [false, true],
    },
    {
      mustProvideAllProps: true,
    }
  ))
  .add('Checking built-in components is not supported', withPropsCombinations(
    'button',
    {
      disabled: [true, false],
    },
    {
      mustProvideAllProps: true,
    }
  ))
