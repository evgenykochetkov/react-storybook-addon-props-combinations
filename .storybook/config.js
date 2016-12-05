import { configure, setAddon } from '@kadira/storybook'

import WithPropsCombinationsAddon, { setDefaults as setWithPropsCombinationsAddonDefaults } from '../src/'

setAddon(WithPropsCombinationsAddon)
setWithPropsCombinationsAddonDefaults({
  // overwrite global defaults here
})

configure(() => {
  require('../example/index.js');
}, module);
