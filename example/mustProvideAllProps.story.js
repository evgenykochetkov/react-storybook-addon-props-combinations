import React, { PropTypes as pt } from 'react';
import { storiesOf } from '@kadira/storybook';

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
  .addWithPropsCombinations(
    'With all props provided',
    SomeComponent,
    {
      foo: [1, 2],
      bar: ['a', 'b'],
      baz: [false, true],
    },
    {
      mustProvideAllProps: true,
    }
  )
  .addWithPropsCombinations(
    'When values for some props are not provided',
    SomeComponent,
    {
      // not providing possible values for foo and bar
      baz: [false, true],
    },
    {
      mustProvideAllProps: true,
    }
  )
  .addWithPropsCombinations(
    'Checking built-in components is not supported',
    'button',
    {
      disabled: [true, false],
    },
    {
      mustProvideAllProps: true,
    }
  )
