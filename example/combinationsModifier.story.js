import React, { PropTypes as pt } from 'react';
import { storiesOf } from '@kadira/storybook';

import { withOneOfBool } from '../src';

// A primitive implementation for the sake of brevity.
// You should probably use one from your favorite functional library instead
const compose = (...fns) => (x) => fns.reduceRight((res, f) => f(res), x)

class FancyThing extends React.Component {
  static propTypes = {
    red: pt.bool,
    green: pt.bool,
    blue: pt.bool,
    big: pt.bool,
    small: pt.bool,
  }

  getColor() {
    const { red, green, blue } = this.props;

    if (red) return 'red';
    if (green) return 'green';
    if (blue) return 'blue';

    return 'black';
  }

  getPadding() {
    const { big, small } = this.props;

    if (big) return 25;
    if (small) return 7;

    return 15;
  }

  render () {
    const color = this.getColor();

    const style = {
      display: 'inline-block',
      color,
      padding: this.getPadding(),
      border: `2px solid ${color}`,
    }

    return (
      <div style={style}>
        { this.props.children }
      </div>
    )
  }
}

storiesOf('combinationsModifier example', module)
  .addWithPropsCombinations(
    'one modifier',
    FancyThing,
    {
      children: ['Look at me!'],
    },
    {
      combinationsModifier: withOneOfBool(['red', 'green', 'blue']),
    }
  )
  .addWithPropsCombinations(
    'modifiers composition',
    FancyThing,
    {
      children: ['Look at me!'],
    },
    {
      combinationsModifier: compose(
        withOneOfBool(['red', 'green', 'blue']),
        withOneOfBool(['big', 'small'])
      ),
    }
  )