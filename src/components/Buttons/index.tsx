import { GridRowParams } from '@mui/x-data-grid'

type ButtonsProps = {
  params?: GridRowParams
  onButtonClick?: (id: string, params: GridRowParams) => void
}

import * as S from '../../pages/Home/styles'

export const Buttons = ({ params, onButtonClick }: ButtonsProps) => (
  <div
    style={{
      display: 'flex',
      gap: 8,
    }}
  >
    <S.Button
      type='outline'
      onClick={() => params && onButtonClick && onButtonClick('deny', params)}
    >
      Deny
    </S.Button>

    {params?.row.col5 === 'Blocked' ? (
      <S.Button onClick={() => params && onButtonClick && onButtonClick('approve', params)}>
        Aprove
      </S.Button>
    ) : (
      <S.Button onClick={() => params && onButtonClick && onButtonClick('block', params)}>
        Block
      </S.Button>
    )}
  </div>
)
