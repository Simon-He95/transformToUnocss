import { getFirstName } from './utils'
import { size } from './size'
import { transformBackground } from './background'
import { max } from './max'
import { font } from './font'
import { transformCursor } from './cursor'
import { transformMargin } from './margin'
import { transformOpacity } from './opacity'
import { transformColor } from './color'
import { text } from './text'
import { transformVertical } from './transformVertical'
import { line } from './line'
import { transformBorder } from './border'
import { display } from './display'
import { float } from './float'
import { top } from './top'
import { list } from './list'
import { box } from './box'
import { transformFilter } from './filter'
import { transformBackdrop } from './backdrop'
import { transform } from './transform'
import { transformTransition } from './transition'
import { justify } from './justify'
import { align } from './align'
import { transformFlex } from './flex'
import { aspect } from './aspect'
import { column } from './column'
import { isolation } from './isolation'
import { object } from './object'
import { overscroll } from './overscroll'
import { grid } from './grid'
import { row } from './row'
import { place } from './place'
import { letter } from './letter'

const typeMap: any = {
  aspect,
  column,
  columns: float,
  break: float,
  box,
  display,
  float,
  clear: float,
  isolation,
  object,
  overflow: float,
  overscroll,
  position: display,
  top,
  left: top,
  right: top,
  bottom: top,
  visibility: display,
  z: size,
  flex: transformFlex,
  order: float,
  grid,
  gap: top,
  justify,
  align,
  place,
  padding: transformMargin,
  margin: transformMargin,
  width: size,
  min: max,
  max,
  height: size,
  font,
  letter,
  line,
  list,
  text,

  background: transformBackground,
  cursor: transformCursor,
  opacity: transformOpacity,
  color: transformColor,
  vertical: transformVertical,
  border: transformBorder,
  filter: transformFilter,
  backdrop: transformBackdrop,
  transform,
  transition: transformTransition,
  row,
}
export function transformToUnocss(css: String) {
  const splitReg = /([\w-]+)\s*:\s*([.\w\(\)-\s%+'",#\/]+)/
  const match = css.match(splitReg)
  if (!match)
    return
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, key, val] = match
  const first = getFirstName(key)
  const result = typeMap[first](key, val)
  return result
}

