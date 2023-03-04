import { ReactElement, useMemo } from 'react'
import { DataGrid, ptBR, DataGridProps, GridRowParams } from '@mui/x-data-grid'

import { Empty } from './Empty'
import { gridStyles } from './styles'
import { getColumns } from './Columns'
import { getRows } from './Rows'

export type ButtonClickProps = (id: string, params: GridRowParams) => void

export type RowProps = {
  [X: string]: string | number
}

export type ActionProps = {
  columnName: string
  cellWidth?: number
  element: (params: GridRowParams) => ReactElement
}

type GridProps = Omit<DataGridProps, 'rows' | 'columns'> & {
  gridId?: string
  data: RowProps[]
  heightGrid?: number | string
  actions?: ActionProps
  onClick?: ButtonClickProps
}

export const Grid = ({ gridId, data, heightGrid, actions, onClick, ...props }: GridProps) => {
  const styles = useMemo(() => ({ ...gridStyles, height: heightGrid }), [])
  const columns = useMemo(() => getColumns({ gridId, data, onClick }), [data])
  const rows = useMemo(() => getRows({ gridId, data }), [data])

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      rowHeight={47}
      headerHeight={47}
      autoHeight={!heightGrid}
      showCellRightBorder
      showColumnRightBorder
      localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      sx={styles}
      components={{
        NoRowsOverlay: () => <Empty />,
      }}
      {...props}
    />
  )
}
