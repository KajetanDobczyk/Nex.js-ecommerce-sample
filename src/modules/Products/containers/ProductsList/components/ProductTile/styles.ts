import styled from '@emotion/styled'
import Image from 'next/image'

import theme from 'src/styles/theme'

export const ProductTileWrapper = styled.li<{ isOnGrid: boolean }>(
  ({ isOnGrid }) => `
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: ${isOnGrid ? 0 : '20px'};
  min-height: ${isOnGrid ? '300px' : 'none'};

  ${theme.media.xs} {
    flex-direction: ${isOnGrid ? 'column' : 'row'};
  }
`,
)

export const ProductDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const ProductImageWrapper = styled.div<{ isOnGrid: boolean }>(
  ({ isOnGrid }) => `
  position: relative;
  width: ${isOnGrid ? '100%' : 'auto'};
  height: ${isOnGrid ? '50%' : '150px'};
  aspect-ratio: 1;
  margin-bottom: 15px;
  margin-right: ${isOnGrid ? 0 : '20px'};
`,
)

export const ProductImage = styled(Image)`
  object-fit: contain;
`

export const ProductTitle = styled.h3`
  &:hover {
    text-decoration: underline;
  }
`

export const ProductPrice = styled.span`
  margin-top: 5px;
  font-size: ${theme.font.size.sm};
  font-weight: ${theme.font.weight.medium};
`
