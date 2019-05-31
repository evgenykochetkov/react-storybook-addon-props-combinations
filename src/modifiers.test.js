import test from 'ava'

import { withOneOfBool, withOneOf } from './modifiers'

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

test('withOneOf', (t) => {
  t.deepEqual(
    [
      {},
      { foo: 'foo' },
      { bar: true, baz: 123 },
    ],
    withOneOf([
        { foo: 'foo' },
        { bar: true, baz: 123 }
    ])([{}])
  )

  t.deepEqual(
    [
      { existingProp: 'must remain' },
      { foo: true, existingProp: 'must remain' },
      { bar: false, existingProp: 'must remain' },
    ],
    withOneOf([
        { foo: true },
        { bar: false },
    ])([{ existingProp: 'must remain' }])
  )

  t.deepEqual(
    [
      { comboA: 'A' },
      { comboB: 'B' },
      { foo: true, comboA: 'A' },
      { bar: 2, comboA: 'A' },
      { foo: true, comboB: 'B' },
      { bar: 2, comboB: 'B' },
    ],
    withOneOf([
        { foo: true },
        { bar: 2 }
    ])([
      { comboA: 'A' },
      { comboB: 'B' },
    ])
  )
})
