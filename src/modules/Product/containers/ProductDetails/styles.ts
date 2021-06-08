import styled from '@emotion/styled'
import Image from 'next/image'

import theme from 'src/styles/theme'

export const ProductDetailsWrapper = styled.div`
  padding: 20px;
  max-width: 500px;
`

export const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vw;
  max-width: 500px;
  margin-bottom: 20px;

  ${theme.media.xs} {
    height: 300px;
  }
`

export const ProductImage = styled(Image)`
  object-fit: contain;
`

export const ProductCategory = styled.span`
  display: block;
  margin-top: 5px;
  font-size: ${theme.font.size.xs};
  text-transform: uppercase;
`

export const ProductPrice = styled.span`
  display: block;
  font-size: ${theme.font.size.sm};
  font-weight: ${theme.font.weight.medium};
  margin-bottom: 20px;
`

export const CartButtons = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;

  button {
    background: none;
    border: 1px solid ${theme.color.black};
    padding: 5px 15px;
    text-transform: uppercase;
    transition: color 0.2s;
    cursor: pointer;

    &:not(:last-of-type) {
      margin-right: 10px;
    }

    &:hover {
      color: ${theme.color.grey[400]};
    }
    &:focus {
      outline: none;
    }
    &:disabled {
      pointer-events: none;
    }
  }
`
