# Props Combinations addon for [React Storybook](https://github.com/storybooks/react-storybook)

Given possible values for each prop, renders your component with all combinations of prop values. Useful for finding edge cases or just seeing all component states at once.

### [Live demo](https://evgenykochetkov.github.io/react-storybook-addon-props-combinations/)

## Installation

Install it:

```sh
npm i -D react-storybook-addon-props-combinations
```

Then set the addon in your `.storybook/config.js`:

```js
import { configure, setAddon } from '@kadira/storybook'

import withPropsCombinations, { setDefaults } from 'react-storybook-addon-props-combinations'

setAddon(withPropsCombinations)
setDefaults({
  // overwrite global defaults here
})

configure(() => {
  // ...
}, module)
```

## Basic usage

```js
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import YourComponent from './somewhere'

storiesOf('Basics', module)
  .addWithPropsCombinations(
    'Standard usage',
    // provide your component
    YourComponent,
    // and an object with the shape
    // {propName: arrayOfPossiblevalues}
    {
      disabled: [false, true],
      onClick: [action('clicked')],
      children: ['hello world', <b>some elements</b>]
    }
  )
```

## Options

Are provided as 4th argument to `addWithPropsCombinations` or set globally using `setDefaults`

### `showSource`
default: `true`

Toggles rendering of sample source for each combination.

[Example source](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations/blob/master/example/basicUsage.story.js) | [Result](https://evgenykochetkov.github.io/react-storybook-addon-props-combinations/?selectedKind=Basics&selectedStory=Standard%20usage&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel)

### `mustProvideAllProps`
default: `false`

Ensures that possible values are provided for all props listed in propTypes.

[Example source](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations/blob/master/example/mustProvideAllProps.story.js) | [Result](https://evgenykochetkov.github.io/react-storybook-addon-props-combinations/?selectedKind=mustProvideAllProps%20example&selectedStory=With%20all%20props%20provided&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel)

### `CombinationRenderer`
[default implementation](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations/blob/master/src/CombinationRenderer.js)

A component that renders a single props combination for your component. Receives `Component`, `props` and `options` as props.

[Example source](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations/blob/master/example/customCombinationRenderer.story.js) | [Result](https://evgenykochetkov.github.io/react-storybook-addon-props-combinations/?selectedKind=Custom%20CombinationRenderer%20example&selectedStory=Rendering%20just%20a%20component%20without%20any%20wrappers&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel)
