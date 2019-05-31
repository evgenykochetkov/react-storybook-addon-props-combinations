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

export const withOneOf = propObjects => combinations =>
  combinations.concat(
    flatMap(
      combinations,
      c => propObjects.map(
        props => ({ ...c, ...props })
      )
    )
  )
