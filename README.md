[![npm version](https://badge.fury.io/js/react-storybook-addon-props-combinations.svg)](https://www.npmjs.com/package/react-storybook-addon-props-combinations)
[![npm](https://img.shields.io/npm/dm/react-storybook-addon-props-combinations.svg)](https://www.npmjs.com/package/react-storybook-addon-props-combinations)
[![Build Status](https://travis-ci.org/evgenykochetkov/react-storybook-addon-props-combinations.svg?branch=master)](https://travis-ci.org/evgenykochetkov/react-storybook-addon-props-combinations)


# Props Combinations addon for [React Storybook](https://github.com/storybooks/react-storybook)

Given possible values for each prop, renders your component with all combinations of prop values. Useful for finding edge cases or just seeing all component states at once.

### [Live storybook demo](https://evgenykochetkov.github.io/react-storybook-addon-props-combinations/)

## Installation

Install it:

```sh
npm i -D react-storybook-addon-props-combinations
```

Then set the addon in your `.storybook/config.js`:

```js
import { configure } from '@storybook/react'

import { setDefaults } from 'react-storybook-addon-props-combinations'

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
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import withPropsCombinations from 'react-storybook-addon-props-combinations'

import YourComponent from './somewhere'

storiesOf('Basics', module)
  .add('Standard usage', withPropsCombinations(
    // provide your component
    YourComponent,
    // and an object with the shape
    // {propName: arrayOfPossiblevalues}
    {
      disabled: [false, true],
      onClick: [action('clicked')],
      children: ['hello world', <b>some elements</b>]
    }
  ))
```

## Options

Options can be provided as 4th argument to `addWithPropsCombinations` or set globally using `setDefaults`.

Name | Type | Default | Description | Storybooks |
---- | ---- | ------- | ----------- | ---------- |
`CombinationRenderer` | `Component` | [default renderer](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations/blob/master/src/CombinationRenderer.js) | A component that renders a single props combination for your component. Receives `Component`, `props` and `options` as props. | [Source](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations/blob/master/example/customCombinationRenderer.story.js), [Demo](https://evgenykochetkov.github.io/react-storybook-addon-props-combinations/?selectedKind=Custom%20CombinationRenderer%20example&selectedStory=Rendering%20just%20a%20component%20without%20any%20wrappers&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel)
`combinationsModifier` | `function` | `x => x` | A function that takes an array of generated prop combinations, does something with it (adds new combinations, removes or modifies some of existing ones, etc), and returns that modified array. See [included combination modifiers](#included-combination-modifiers) below. | [Source](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations/blob/master/example/combinationsModifier.story.js), [Demo](https://evgenykochetkov.github.io/react-storybook-addon-props-combinations/?selectedKind=combinationsModifier%20example&selectedStory=one%20modifier&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel)
`mustProvideAllProps` | `boolean` | `false` | Ensures that possible values are provided for all props listed in propTypes. | [Source](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations/blob/master/example/mustProvideAllProps.story.js), [Demo](https://evgenykochetkov.github.io/react-storybook-addon-props-combinations/?selectedKind=mustProvideAllProps%20example&selectedStory=With%20all%20props%20provided&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel)
`showSource` | `boolean` | `true` | Toggles rendering of sample source for each combination. | [Source](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations/blob/master/example/basicUsage.story.js), [Demo](https://evgenykochetkov.github.io/react-storybook-addon-props-combinations/?selectedKind=Basics&selectedStory=Standard%20usage&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel)
`style` | `object` | `{}` | Optional styling for wrapping div of each rendered combination |
## Included Combination Modifiers

The following combination modifiers are included by default. If you'd like to expand this list, PRs are welcome!

Name | Description |
---- | ----------- |
`withOneOfBool` | Takes an array of property names and adds more combination with one of these props set to true. <br /> For example, if we had `[{ label: 'my button' }]`, `withOneOfBool(['small', 'big'])` will add `{ label: 'my button', small: true }` and `{ label: 'my button', big: true }`. <br /> See [this story](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations/blob/master/example/combinationsModifier.story.js) for a more detailed example.

