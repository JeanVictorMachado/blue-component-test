import { GridColDef } from '@mui/x-data-grid'
import { RowProps } from '..'

export const parseColumns = (data: RowProps[]) => {
  const keyNames = Object.keys(data[0]).filter((name) => name !== 'id')

  const columns = keyNames.map((name, index) => {
    return {
      field: `col${index + 1}`,
      headerName: name,
      flex: 1,
      minWidth: 120,
    }
  })

  return columns as GridColDef[]
}
