import CartLabel from 'src/modules/Cart/components/CartLabel'

import * as S from './styles'

const Header = () => (
  <S.Header>
    <S.Logo>
      <img src="/logo.svg" />
      <span>Next E-Commerce Sample</span>
    </S.Logo>
    <S.Right>
      <CartLabel />
    </S.Right>
  </S.Header>
)

export default Header
