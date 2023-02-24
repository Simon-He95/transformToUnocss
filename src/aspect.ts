import { getFirstName, trim } from './utils'

export function aspect(key: string, val: string) {
  if (val === 'auto')
    return `${getFirstName(key)}-${val}`
  return `${getFirstName(key)}-[${trim(val, 'all')}]`
}
