import { GridColDef, GridRowParams } from '@mui/x-data-grid'

import { ButtonsTest } from '~/components/ButtonsTest'
import { GetColumnsProps } from '.'

type DefaultColumnsProps = Omit<GetColumnsProps, 'gridId'>

export const test2Columns = ({ data, onClick }: DefaultColumnsProps) => {
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
      width: 244,
      getActions: (params: GridRowParams) => [
        <ButtonsTest key={columns.length + 1} params={params} onButtonClick={onClick} />,
      ],
    },
  ] as GridColDef[]
}
