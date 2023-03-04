import { GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid'

import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { GetColumnsProps } from '.'
import { Box } from '@mui/material'

type DefaultColumnsProps = Omit<GetColumnsProps, 'gridId'>

export const testColumns = ({ data }: DefaultColumnsProps) => {
  const keyNames = Object.keys(data[0]).filter((name) => name !== 'id')

  const columns = keyNames.map((name, index) => {
    return {
      field: `col${index + 1}`,
      headerName: name,
      flex: 1,
      minWidth: 120,
    }
  })

  return [
    ...columns,
    {
      field: `col${columns.length + 1}`,
      headerName: 'Options',
      type: 'actions',
      headerAlign: 'left',
      getActions: (params: GridRowParams) => [
        <Box key={columns.length + 1}>
          <EditOutlinedIcon />
        </Box>,
      ],
    },
  ] as GridColDef[]
}
