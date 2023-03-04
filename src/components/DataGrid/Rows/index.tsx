import { GridRowsProp } from '@mui/x-data-grid'

import { GridProps, RowProps } from '../types'

type GetRowsProps = Pick<GridProps, 'data'>

export const getRows = ({ data }: GetRowsProps) => {
  const rows = data.map((row, i) => {
    const values = Object.values(row)

    let formattedRow = {} as RowProps

    values.forEach((value, index) => {
      if (!index) {
        formattedRow.id = i + 1
        return
      }

      formattedRow[`col${index}`] = value
    })

    return formattedRow
  })

  return rows as GridRowsProp
}
