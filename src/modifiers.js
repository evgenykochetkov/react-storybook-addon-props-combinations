import { flatMap } from './utils'

export const withOneOfBool = boolPropNames => combinations =>
  flatMap(
    combinations,
    c => boolPropNames.map(
      boolPropName => ({ ...c, [boolPropName]: true })
    )
  )
