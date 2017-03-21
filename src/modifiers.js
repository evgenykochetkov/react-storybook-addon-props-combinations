import { flatMap } from './utils'

export const withOneOfBool = boolPropNames => combinations =>
  combinations.concat(
    flatMap(
      combinations,
      c => boolPropNames.map(
        boolPropName => ({ ...c, [boolPropName]: true })
      )
    )
  )
