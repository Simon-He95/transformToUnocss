import { getFirstName, getVal } from './utils'

export function max(key: string, val: string) {
  const all = key.split('-')
  return `${all[0]}-${all[1][0]}${getVal(getFirstName(val))}`
}
