import { useSelector } from 'react-redux'

import {
  selectProducts,
  selectProductsFetchStatus,
} from '../../store/selectors'
import ProductTile from './components/ProductTile'

const ProductsList = () => {
  const products = useSelector(selectProducts)
  const fetchStatus = useSelector(selectProductsFetchStatus)

  if (fetchStatus === 'failed' || !products.length) {
    return <h2>Products not found</h2>
  }

  return (
    <ul>
      {products.map((product) => (
        <ProductTile key={product.id} product={product} />
      ))}
    </ul>
  )
}

export default ProductsList
