import { GridActionsCellItem, GridColDef, GridRowsProp } from '@mui/x-data-grid'

import { OptionsProps, RowProps } from '..'

export const parseColumns = (data: RowProps[], options?: OptionsProps) => {
  const keyNames = Object.keys(data[0]).filter((name) => name !== 'id')

  const columns = keyNames.map((name, index) => {
    return {
      field: `col${index + 1}`,
      headerName: name,
      flex: 1,
      minWidth: 120,
    }
  })

  return !options
    ? (columns as GridColDef[])
    : ([
        ...columns,
        {
          field: options.columnName,
          headerName: options.columnName,
          type: 'actions',
          minWidth: 120,
          align: 'center',
          getActions: (params: GridRowsProp) =>
            options.elements.map((item, index) => (
              <GridActionsCellItem
                key={index + 1}
                icon={item.icon}
                label={item.label}
                onClick={() => item.onClick(params)}
              />
            )),
        },
      ] as GridColDef[])
}
