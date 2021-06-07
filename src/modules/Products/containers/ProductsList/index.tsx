import { useState } from 'react'
import { useSelector } from 'react-redux'

import {
  selectProducts,
  selectProductsFetchStatus,
} from '../../store/selectors'
import ProductTile from './components/ProductTile'
import * as S from './styles'

const ProductsList = () => {
  const [isGridView, setIsGridView] = useState<boolean>(true)
  const products = useSelector(selectProducts)
  const fetchStatus = useSelector(selectProductsFetchStatus)

  const setViewMode = (newMode: boolean) => () => {
    setIsGridView(newMode)
  }

  if (fetchStatus === 'failed' || !products.length) {
    return <h2>Products not found</h2>
  }

  return (
    <S.ProductsListWrapper>
      <S.ViewModeSwitches>
        <button onClick={setViewMode(true)}>
          <img src="/icons/grid.svg" alt="Grid" />
        </button>
        <button onClick={setViewMode(false)}>
          <img src="/icons/list.svg" alt="List" />
        </button>
      </S.ViewModeSwitches>
      <S.ProductsList isGridView={isGridView}>
        {products.map((product) => (
          <ProductTile
            key={product.id}
            product={product}
            isOnGrid={isGridView}
          />
        ))}
      </S.ProductsList>
    </S.ProductsListWrapper>
  )
}

export default ProductsList
