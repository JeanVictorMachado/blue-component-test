import { useMemo } from 'react'
import { DataGrid, ptBR, DataGridProps } from '@mui/x-data-grid'

import { EmptyGrid } from './EmptyGrid'
import { gridStyles } from './styles'
import { parseColumns } from './helpers/parseColumns'
import { parseRows } from './helpers/parseRows'

export type RowProps = {
  [X: string]: string | number
}

type GridProps = Omit<DataGridProps, 'rows' | 'columns'> & {
  data: RowProps[]
  heightGrid?: number | string
  // optionsGrid?: ReactNode
}

export const Grid = ({ data, heightGrid, ...props }: GridProps) => {
  const columns = useMemo(() => parseColumns(data), [data])
  const rows = useMemo(() => parseRows(data), [data])

  const styles = useMemo(() => {
    return { ...gridStyles, height: heightGrid }
  }, [])

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
        NoRowsOverlay: () => <EmptyGrid />,
      }}
      {...props}
    />
  )
}
