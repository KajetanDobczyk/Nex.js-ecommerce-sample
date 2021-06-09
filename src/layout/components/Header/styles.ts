import styled from '@emotion/styled'

import theme from 'src/styles/theme'

export const Header = styled.header`
  position: fixed;
  z-index: 999;
  height: 80px;
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.color.black};
  color: ${theme.color.white};
  padding: 20px;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: auto;
    height: 15px;

    ${theme.media.sm} {
      height: 20px;
    }
    ${theme.media.md} {
      height: 30px;
    }
  }
  span {
    display: inline-block;
    margin-left: 20px;
  }
`
