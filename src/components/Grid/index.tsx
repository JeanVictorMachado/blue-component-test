import { DataGrid, GridRowsProp, GridColDef, ptBR } from '@mui/x-data-grid'

const rows: GridRowsProp = [
  {
    id: 1,
    col1: 'Hello',
    col2: 'World',
    col3: 'World',
    col4: 'World',
    col5: 'World',
  },
  { id: 2, col1: 'MUI X', col2: 'is awesome' },
  { id: 3, col1: 'Material UI', col2: 'is amazing' },
  { id: 4, col1: 'MUI', col2: '' },
  { id: 5, col1: 'Joy UI', col2: 'is awesome' },
  { id: 6, col1: 'MUI Base', col2: 'is amazing' },
  { id: 7, col1: 'MUI Base', col2: 'is amazing' },
]

const columns: GridColDef[] = [
  { field: 'id', hide: true },
  { field: 'col1', headerName: 'Column 1', flex: 1 },
  { field: 'col2', headerName: 'Column 2', flex: 1 },
  { field: 'col3', headerName: 'Column 3', flex: 1 },
  { field: 'col4', headerName: 'Column 4', flex: 1 },
  { field: 'col5', headerName: 'Column 5', flex: 1 },
]

export const Grid = () => {
  const styles = {
    border: 'none',
    borderRadius: '0px',
    '.MuiDataGrid-columnHeaders': {
      background: '#E4E8EA',
    },
    '.MuiDataGrid-columnHeader': {
      background: '#E4E8EA',
      borderColor: 'white',
    },
    '.MuiDataGrid-columnHeaderTitle': {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 20,
      letter: '0.25px',
      paddingLeft: '6px',
    },
    '.MuiDataGrid-cell': {
      borderBottom: 'none',
    },
    '.MuiDataGrid-cell--textLeft': {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 20,
      letter: '0.25px',
      paddingLeft: '16px',
    },
    '.MuiDataGrid-columnSeparator': {
      display: 'none',
    },
  }

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      rowHeight={47}
      headerHeight={47}
      sx={styles}
      autoHeight
      showCellRightBorder
      showColumnRightBorder
      localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
    />
  )
}
