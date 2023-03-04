import { cloneElement } from 'react'
import { GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid'

import { GridProps } from '../types'

type GetColumnsProps = Pick<GridProps, 'data' | 'actions'>

export const getColumns = ({ data, actions }: GetColumnsProps) => {
  const keyNames = Object.keys(data[0]).filter((name) => name !== 'id')

  const columns = keyNames.map((name, index) => {
    return {
      field: `col${index + 1}`,
      headerName: name,
      flex: 1,
      minWidth: 120,
    }
  })

  return !actions
    ? (columns as GridColDef[])
    : ([
        ...columns,
        {
          field: `col${columns.length + 1}`,
          headerName: actions.columnName,
          type: 'actions',
          headerAlign: 'left',
          width: actions.cellWidth ? actions.cellWidth : 100,
          getActions: (params: GridRowParams) =>
            actions.elements.map((item) => (
              <GridActionsCellItem
                key={item.id}
                label={item.id}
                icon={cloneElement(item.element, { params })}
                onClick={() => item.onClick && item.onClick(params)}
                sx={{
                  padding: 0,
                  '&:hover': {
                    background: 'none',
                  },
                }}
              />
            )),
        },
      ] as GridColDef[])
}
