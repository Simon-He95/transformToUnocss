import { getVal } from './utils'

export function transformCursor(key: string, val: string) {
  return `${key}-${getVal(val)}`
}
