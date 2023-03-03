import { Box } from '@mui/material'
import { Grid } from '~/components/Grid'

// import EditOutlinedIcon from '@mui/icons-material/EditOutlined'

export const Home = () => {
  const data = [
    {
      id: 1,
      Name: 'Mateus Coutinho',
      'Last 4 digits': '0001',
      'Limit amount': 'R$ 100,00 / R$ 400,00',
      'Expiration date': '04/02',
      Status: 'Blocked',
    },
    {
      id: 2,
      Name: 'Joelson Marcos',
      'Last 4 digits': '0002',
      'Limit amount': 'R$ 100,00 / R$ 400,00',
      'Expiration date': '04/02',
      Status: 'Blocked',
    },
    {
      id: 3,
      Name: 'José Márcio',
      'Last 4 digits': '0003',
      'Limit amount': 'R$ 100,00 / R$ 400,00',
      'Expiration date': '04/02',
      Status: 'Blocked',
    },
    {
      id: 4,
      Name: 'João Francisco',
      'Last 4 digits': '0004',
      'Limit amount': 'R$ 100,00 / R$ 400,00',
      'Expiration date': '04/02',
      Status: 'Blocked',
    },
    {
      id: 5,
      Name: 'Fábio Santos',
      'Last 4 digits': '0005',
      'Limit amount': 'R$ 100,00 / R$ 400,00',
      'Expiration date': '04/02',
      Status: 'Blocked',
    },
    {
      id: 6,
      Name: 'Pedro Andrade',
      'Last 4 digits': '0006',
      'Limit amount': 'R$ 100,00 / R$ 400,00',
      'Expiration date': '04/02',
      Status: 'Blocked',
    },
    {
      id: 7,
      Name: 'Pedro Henrique',
      'Last 4 digits': '0007',
      'Limit amount': 'R$ 100,00 / R$ 400,00',
      'Expiration date': '04/02',
      Status: 'Blocked',
    },
  ]

  return (
    <Box padding={4}>
      <Grid data={data} />
    </Box>
  )
}
