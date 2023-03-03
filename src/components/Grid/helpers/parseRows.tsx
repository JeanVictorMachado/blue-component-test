import { GridRowsProp } from '@mui/x-data-grid'
import { RowProps } from '..'

export const parseRows = (data: RowProps[]) => {
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
