import { useDispatch, useSelector } from 'react-redux'

import { ICartStateKey } from 'src/modules/Cart/store/interfaces'
import { addProductToCart } from 'src/modules/Cart/store/slice'

import { productImageLoader } from '../../helpers'
import {
  selectIsProductInCart,
  selectProduct,
  selectProductFetchStatus,
} from '../../store/selectors'
import * as S from './styles'

const ProductDetails = () => {
  const dispatch = useDispatch()

  const product = useSelector(selectProduct)
  const fetchStatus = useSelector(selectProductFetchStatus)
  const isProductInCart = useSelector(selectIsProductInCart)

  if (fetchStatus === 'failed' || !product) {
    return <h2>Product not found</h2>
  }

  const addToCart = (key: ICartStateKey) => () => {
    dispatch(addProductToCart({ key, product }))
  }

  return (
    <S.ProductDetailsWrapper>
      <S.ProductImageWrapper>
        <S.ProductImage
          loader={productImageLoader}
          src={product.image}
          layout="fill"
          alt={product.title}
        />
      </S.ProductImageWrapper>
      <h2>{product.title}</h2>
      <S.ProductCategory>{product.category}</S.ProductCategory>
      <S.ProductPrice>${product.price}</S.ProductPrice>
      <p>{product.description}</p>
      <S.CartButtons>
        <button
          disabled={isProductInCart.wishlist}
          onClick={addToCart('wishlist')}
        >
          {isProductInCart.wishlist ? 'Already in wishlist' : 'Add to Wishlist'}
        </button>
        <button
          disabled={isProductInCart.shoppingBag}
          onClick={addToCart('shoppingBag')}
        >
          {isProductInCart.shoppingBag
            ? 'Already in Shopping Bag'
            : 'Add to Shopping Bag'}
        </button>
      </S.CartButtons>
    </S.ProductDetailsWrapper>
  )
}

export default ProductDetails
