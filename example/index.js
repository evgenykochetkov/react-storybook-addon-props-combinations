import React, { PropTypes as pt } from 'react';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Standard button', module)
  .addWithPropsCombinations(
    'Props Combinations',
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

class SomeComponent extends React.Component {
  static propTypes = {
    foo: pt.string.isRequired,
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

storiesOf('SomeComponent', module)
  .addWithPropsCombinations(
    'mustProvideAllProps test',
    SomeComponent,
    {
      // foo: [1, 2],
      bar: ['a', 'b'],
      baz: [false, true],
    },
    {
      mustProvideAllProps: true,
    }
  )
