import { ReactElement, ReactNode, useMemo } from 'react'
import { DataGrid, ptBR, DataGridProps, GridRowsProp } from '@mui/x-data-grid'

import { EmptyGrid } from './EmptyGrid'
import { gridStyles } from './styles'
import { parseColumns } from './helpers/parseColumns'
import { parseRows } from './helpers/parseRows'

export type RowProps = {
  [X: string]: string | number
}

export type ElementProps = {
  icon: ReactElement
  label: string
  onClick: (params: GridRowsProp) => void
}

export type OptionsProps = {
  columnName: string
  elements: ElementProps[]
}

type GridProps = Omit<DataGridProps, 'rows' | 'columns'> & {
  data: RowProps[]
  heightGrid?: number | string
  optionsGrid?: OptionsProps
}

export const Grid = ({ data, heightGrid, optionsGrid, ...props }: GridProps) => {
  const columns = useMemo(() => parseColumns(data, optionsGrid), [data])
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
