import styled from '@emotion/styled'

import theme from 'src/styles/theme'

export const CartLabelWrapper = styled.div`
  display: flex;
  font-size: ${theme.font.size.xs};

  ${theme.media.xs} {
    font-size: ${theme.font.size.sm};
  }
`

export const CartLabel = styled.div`
  display: flex;
  align-items: center;

  :not(:last-of-type) {
    margin-right: 30px;

    ${theme.media.xl} {
      margin-right: 50px;
    }
  }

  img {
    display: block;
    height: 20px;
    margin-right: 5px;

    ${theme.media.md} {
      margin-right: 10px;
    }
  }
`

export const CartLabelTitle = styled.span`
  display: none;
  margin-right: 8px;

  ${theme.media.sm} {
    display: block;
  }
`

export const CartLabelAmount = styled.span`
  font-weight: ${theme.font.weight.medium};
`
