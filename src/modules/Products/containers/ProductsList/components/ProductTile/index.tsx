import Link from 'next/link'

import { productImageLoader } from 'src/modules/Product/helpers'
import { IProduct } from 'src/modules/Product/interfaces'

import * as S from './styles'

type Props = {
  product: IProduct
  isOnGrid: boolean
}

const ProductTile: React.FC<Props> = ({ product, isOnGrid }) => (
  <S.ProductTileWrapper isOnGrid={isOnGrid}>
    <Link href={`products/${product.id}`}>
      <a>
        <S.ProductImageWrapper isOnGrid={isOnGrid}>
          <S.ProductImage
            loader={productImageLoader}
            src={product.image}
            layout="fill"
            alt={product.title}
          />
        </S.ProductImageWrapper>
        <S.ProductDetails>
          <S.ProductTitle>{product.title}</S.ProductTitle>
          <S.ProductPrice>${product.price}</S.ProductPrice>
        </S.ProductDetails>
      </a>
    </Link>
  </S.ProductTileWrapper>
)

export default ProductTile
