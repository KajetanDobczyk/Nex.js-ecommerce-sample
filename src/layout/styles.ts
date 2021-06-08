import styled from '@emotion/styled'

import theme from 'src/styles/theme'

export const Main = styled.main`
  padding-top: 80px;
  overflow-x: hidden;
`

export const Breadcrumbs = styled.div`
  padding: 20px;
  font-size: ${theme.font.size.sm};

  a {
    &:hover {
      text-decoration: underline;
    }
  }
`
