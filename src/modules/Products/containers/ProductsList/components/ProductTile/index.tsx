import Link from 'next/link'

import { IProduct } from 'src/modules/Product/interfaces'

type Props = {
  product: IProduct
}

const ProductTile: React.FC<Props> = ({ product }) => (
  <Link href={`products/${product.id}`}>
    <a>
      <h2>{product.title}</h2>
      <span>${product.price}</span>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
    </a>
  </Link>
)

export default ProductTile
