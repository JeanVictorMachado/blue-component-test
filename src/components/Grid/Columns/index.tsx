import { defaultColumns } from './defaultColumns'
import { ButtonClickProps, RowProps } from '..'
import { test2Columns } from './test2Columns'
import { testColumns } from './testColumns'

export type GetColumnsProps = {
  gridId?: string
  data: RowProps[]
  onClick?: ButtonClickProps
}

export const getColumns = ({ gridId, data, onClick }: GetColumnsProps) => {
  if (gridId === 'test-column-id') return testColumns({ data, onClick })
  if (gridId === 'test-2-column-id') return test2Columns({ data, onClick })

  return defaultColumns({ data })
}
