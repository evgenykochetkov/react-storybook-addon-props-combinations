import { configure, setAddon } from '@kadira/storybook'

import WithPropsCombinationsAddon, { setDefaults } from '../src/'

setAddon(WithPropsCombinationsAddon)
setDefaults({
  // overwrite global defaults here
})

const req = require.context('../example', true, /.story.js$/)

configure(() => {
  req.keys().forEach((filename) => req(filename))
}, module)
