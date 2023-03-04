import { useMemo } from 'react'
import { ptBR } from '@mui/x-data-grid'

import { Empty } from './Empty'
import { getRows } from './Rows'
import { getColumns } from './Columns'
import { GridProps } from './types'

import * as S from './styles'

export const DataGrid = ({ data, heightGrid, actions, ...props }: GridProps) => {
  const styles = useMemo(() => ({ ...S.GridStyles, height: heightGrid }), [])
  const columns = useMemo(() => getColumns({ data, actions }), [data])
  const rows = useMemo(() => getRows({ data }), [data])

  return (
    <S.DataGrid
      rows={rows}
      columns={columns}
      rowHeight={47}
      headerHeight={47}
      autoHeight={!heightGrid}
      showCellRightBorder
      showColumnRightBorder
      rowsPerPageOptions={[5, 10, 20, 50, 100]}
      localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      components={{ NoRowsOverlay: () => <Empty /> }}
      isRowSelectable={() => false}
      disableColumnFilter
      sx={styles}
      {...props}
    />
  )
}
