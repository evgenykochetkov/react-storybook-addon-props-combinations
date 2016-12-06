import { configure, setAddon } from '@kadira/storybook'

import withPropsCombinations, { setDefaults } from '../src/'

setAddon(withPropsCombinations)
setDefaults({
  // overwrite global defaults here
})

const req = require.context('../example', true, /.story.js$/)

configure(() => {
  req.keys().forEach((filename) => req(filename))
}, module)
