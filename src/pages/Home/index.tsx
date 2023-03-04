import { Box } from '@mui/material'

import { DataGrid } from '~/components/DataGrid'
import { Buttons } from '~/components/Buttons'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { data } from './mock'

import * as S from './styles'

export const Home = () => {
  return (
    <Box padding={4}>
      <Box>
        <S.GridTitle>Sem Actions</S.GridTitle>

        <DataGrid data={data} />
      </Box>

      <Box>
        <S.GridTitle>Com uma Action</S.GridTitle>

        <DataGrid
          data={data}
          actions={{
            columnName: 'Options',
            elements: [
              {
                id: 'edit',
                element: <EditOutlinedIcon />,
                onClick: (params) => console.log({ edit: params }),
              },
              {
                id: 'delete',
                element: <DeleteOutlineIcon />,
                onClick: (params) => console.log({ delete: params }),
              },
            ],
          }}
        />
      </Box>

      <Box>
        <S.GridTitle>Com Botões</S.GridTitle>

        <DataGrid
          data={data}
          actions={{
            cellWidth: 244,
            columnName: 'Options',
            elements: [
              {
                id: 'buttons',
                element: <Buttons onButtonClick={(id, params) => console.log(id, params)} />,
              },
            ],
          }}
        />
      </Box>
    </Box>
  )
}
