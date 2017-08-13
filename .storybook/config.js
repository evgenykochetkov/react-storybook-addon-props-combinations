import { configure } from '@storybook/react'

import { setDefaults } from '../src/'

setDefaults({
  // overwrite global defaults here
})

const req = require.context('../example', true, /.story.js$/)

configure(() => {
  req.keys().forEach((filename) => req(filename))
}, module)
