import { useSelector } from 'react-redux'

import { selectCartProductsAmount } from 'src/modules/Cart/store/selectors'

import * as S from './styles'

const CartLabel = () => {
  const cartProductsAmount = useSelector(selectCartProductsAmount)

  return (
    <S.CartLabelWrapper>
      <S.CartLabel>
        <img src="/icons/wishlist.svg" alt="Wishlist" />
        <S.CartLabelTitle>Wishlist</S.CartLabelTitle>
        <S.CartLabelAmount data-testid="wishlist-counter">
          {cartProductsAmount.wishlist}
        </S.CartLabelAmount>
      </S.CartLabel>
      <S.CartLabel>
        <img src="/icons/shopping-bag.svg" alt="ShoppingBag" />
        <S.CartLabelTitle>Shopping Bag</S.CartLabelTitle>
        <S.CartLabelAmount data-testid="shopping-bag-counter">
          {cartProductsAmount.shoppingBag}
        </S.CartLabelAmount>
      </S.CartLabel>
    </S.CartLabelWrapper>
  )
}

export default CartLabel
