import { DataGridProps, GridRowParams } from '@mui/x-data-grid'
import { ReactElement } from 'react'

export type RowProps = {
  [X: string]: string | number | ReactElement
}

export type ElementProps = {
  id: string
  element: ReactElement
  onClick?: (params: GridRowParams) => void
}

export type ActionProps = {
  columnName: string
  cellWidth?: number
  elements: ElementProps[]
}

export type GridProps = Omit<DataGridProps, 'rows' | 'columns'> & {
  gridId?: string
  data: RowProps[]
  heightGrid?: number | string
  actions?: ActionProps
}
