import styled from 'styled-components'
import { DataGrid as MuiDataGrid } from '@mui/x-data-grid'

export const DataGrid = styled(MuiDataGrid)``

export const GridStyles = {
  border: 'none',

  '.MuiDataGrid-columnHeaders': {
    background: '#E4E8EA',
  },
  '.MuiDataGrid-columnHeader': {
    background: '#E4E8EA',
    borderColor: 'white',
    paddingRight: '16px',
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
