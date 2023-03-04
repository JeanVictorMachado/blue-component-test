import { GridColDef } from '@mui/x-data-grid'

import { GetColumnsProps } from '.'

type DefaultColumnsProps = Omit<GetColumnsProps, 'gridId'>

export const defaultColumns = ({ data }: DefaultColumnsProps) => {
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
