import { Box } from '@mui/material'

import { Grid } from '~/components/Grid'
import { data } from './mock'

import * as S from './styles'

export const Home = () => {
  return (
    <Box padding={4}>
      <Box>
        <S.GridTitle>Sem Actions</S.GridTitle>

        <Grid data={data} />
      </Box>

      <Box>
        <S.GridTitle>Com uma Action</S.GridTitle>

        <Grid gridId='test-column-id' data={data} />
      </Box>

      <Box>
        <S.GridTitle>Com Botões</S.GridTitle>

        <Grid
          gridId='test-2-column-id'
          data={data}
          onClick={(id, params) => console.log(id, params.row)}
        />
      </Box>
    </Box>
  )
}
