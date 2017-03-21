import test from 'ava'

import { withOneOfBool } from './modifiers'

test('withOneOfBool', (t) => {
  t.deepEqual(
    [
      {},
      { foo: true },
      { bar: true },
    ],
    withOneOfBool(['foo', 'bar'])([{}])
  )

  t.deepEqual(
    [
      { existingProp: 'must remain' },
      { foo: true, existingProp: 'must remain' },
      { bar: true, existingProp: 'must remain' },
    ],
    withOneOfBool(['foo', 'bar'])([{ existingProp: 'must remain' }])
  )

  t.deepEqual(
    [
      { comboA: 'A' },
      { comboB: 'B' },
      { foo: true, comboA: 'A' },
      { bar: true, comboA: 'A' },
      { foo: true, comboB: 'B' },
      { bar: true, comboB: 'B' },
    ],
    withOneOfBool(['foo', 'bar'])([
      { comboA: 'A' },
      { comboB: 'B' },
    ])
  )
})
