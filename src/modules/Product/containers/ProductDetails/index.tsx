import { useSelector } from 'react-redux'

import { productImageLoader } from '../../helpers'
import { selectProduct, selectProductFetchStatus } from '../../store/selectors'
import * as S from './styles'

const ProductDetails = () => {
  const product = useSelector(selectProduct)
  const fetchStatus = useSelector(selectProductFetchStatus)

  if (fetchStatus === 'failed' || !product) {
    return <h2>Product not found</h2>
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
    </S.ProductDetailsWrapper>
  )
}

export default ProductDetails
