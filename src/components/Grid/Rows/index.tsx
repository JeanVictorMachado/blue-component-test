import { RowProps } from '..'
import { defaultRows } from './defaultRows'

type GetRowsProps = {
  gridId?: string
  data: RowProps[]
}

export const getRows = ({ gridId, data }: GetRowsProps) => {
  return defaultRows({ data })
}
