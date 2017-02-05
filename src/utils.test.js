import test from 'ava'

import { combinations } from './utils'

test('combinations', (t) => {
  t.deepEqual(
    [{}],
    combinations({}),
    'passing empty possibleValues object should return [{}]'
  )

  t.deepEqual(
    [
      {foo: 'a'}
    ],
    combinations({
      foo: ['a']
    }),
  )

  t.deepEqual(
    [
      {foo: 'a'},
      {foo: 'b'}
    ],
    combinations({
      foo: ['a', 'b']
    }),
  )

  t.deepEqual(
    [
     {foo: 1, bar: "a"},
     {foo: 1, bar: "b"},
     {foo: 2, bar: "a"},
     {foo: 2, bar: "b"}
    ],
    combinations({
      foo: [1, 2],
      bar: ['a', 'b']
    }),
  )

  t.throws(
    () => combinations({foo: null}),
    'Please provide a non-empty array of possible values for prop foo'
  )

  t.throws(
    () => combinations({foo: []}),
    'Please provide a non-empty array of possible values for prop foo'
  )

  t.throws(
    () => combinations({validField: [1, 2, 3], foo: []}),
    'Please provide a non-empty array of possible values for prop foo'
  )
})
