import { styled } from '@mui/material/styles'

type ButtonProps = {
  type?: 'default' | 'outline'
}

export const GridTitle = styled('h4')(() => ({
  marginBottom: 12,
}))

export const ButtonBox = styled('div')(() => ({
  display: 'flex',
  gap: 8,
}))

export const Button = styled('div')<ButtonProps>(({ type }) => ({
  width: 100,
  height: 30,
  fontSize: '12px',
  border: '1px solid #4D6474',
  background: type === 'outline' ? 'none' : '#4D6474',
  color: type === 'outline' ? '#4D6474' : 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
}))
