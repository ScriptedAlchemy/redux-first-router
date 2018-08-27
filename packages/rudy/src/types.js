// @flow
export const PREFIX = '@@rudy'
export const prefixType = (type: string, prefix?: string) =>
  `${prefix || PREFIX}/${type}`

export const ADD_ROUTES = prefixType('ADD_ROUTES')
