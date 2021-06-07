import styled from '@emotion/styled'

import theme from 'src/styles/theme'

export const ProductsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ViewModeSwitches = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 20px;

  button {
    border: none;
    box-shadow: none;
    background: none;
    cursor: pointer;

    &:not(:last-of-type) {
      margin-right: 10px;
    }
    &:focus {
      outline: none;
    }
    img {
      height: 20px;
    }
  }
`

export const ProductsList = styled.ul<{ isGridView: boolean }>(
  ({ isGridView }) => `
  display: ${isGridView ? 'grid' : 'flex'};
  width: 100%;
  flex-direction: column;
  padding: 20px;
  column-gap: 20px;
  row-gap: 40px;

  ${theme.media.xs} {
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
  }
  ${theme.media.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${theme.media.lg} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  ${theme.media.xl} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`,
)
