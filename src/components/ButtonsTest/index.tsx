import { GridRowParams } from '@mui/x-data-grid'

import { ButtonClickProps } from '../Grid'

type ButtonsProps = {
  params: GridRowParams
  onButtonClick?: ButtonClickProps
}

import * as S from '../../pages/Home/styles'

export const ButtonsTest = ({ params, onButtonClick }: ButtonsProps) => (
  <div
    style={{
      display: 'flex',
      gap: 8,
    }}
  >
    <S.Button type='outline' onClick={() => onButtonClick && onButtonClick('deny', params)}>
      Deny
    </S.Button>
    {params.row.col5 === 'Blocked' ? (
      <S.Button onClick={() => onButtonClick && onButtonClick('approve', params)}>Aprove</S.Button>
    ) : (
      <S.Button onClick={() => onButtonClick && onButtonClick('block', params)}>Block</S.Button>
    )}
  </div>
)
