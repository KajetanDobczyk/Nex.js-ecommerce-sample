import { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { api } from 'src/api'
import { IProduct } from 'src/modules/Product/interfaces'
import ProductsList from 'src/modules/Products/containers/ProductsList'
import { setProducts } from 'src/modules/Products/store/slice'
import { getProductsFailed } from 'src/modules/Products/store/slice'

type Props = {
  products: IProduct[] | null
}

const Home: NextPage<Props> = ({ products }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (products) {
      dispatch(setProducts(products))
    } else {
      dispatch(getProductsFailed())
    }
  }, [])

  return <ProductsList />
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  _context,
) => {
  try {
    const products = await api.products.getProducts()

    return {
      props: {
        products,
      },
    }
  } catch (e) {
    console.log('Error fetching products', e)

    return {
      props: {
        products: [],
      },
    }
  }
}

export default Home
