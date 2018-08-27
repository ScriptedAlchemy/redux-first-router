// @flow
export const PREFIX = '@@delores'
export const prefixType = (type: string, prefix?: string) =>
  `${prefix || PREFIX}/${type}`

export const CALL_HISTORY = prefixType('CALL_HISTORY')
export const NOT_FOUND = prefixType('NOT_FOUND')
export const CHANGE_BASENAME = prefixType('CHANGE_BASENAME')
export const CLEAR_CACHE = prefixType('CLEAR_CACHE')

export const CONFIRM = prefixType('CONFIRM')
export const BLOCK = prefixType('BLOCK', '@@skipdelores') // these skip middleware pipeline, and are reducer-only
export const UNBLOCK = prefixType('UNBLOCK', '@@skipdelores')

export const SET_FROM = prefixType('SET_FROM', '@@skipdelores')