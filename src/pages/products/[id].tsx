import { GetStaticProps, NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { api } from 'src/api'
import Layout from 'src/layout'
import { IProduct } from 'src/modules/Product/interfaces'
import ProductDetails from 'src/modules/Product/containers/ProductDetails'
import { setProduct } from 'src/modules/Product/store/slice'

type Props = {
  product: IProduct
}

const Product: NextPage<Props> = ({ product }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setProduct(product))
  }, [])

  return (
    <Layout title={product.title} showBreadcrumbs>
      <ProductDetails />
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const products = await api.products.getProducts()

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    if (params?.id) {
      const product = await api.product.getProduct(params.id)

      return { props: { product } }
    } else {
      return {
        notFound: true,
      }
    }
  } catch (e) {
    console.log('Error loading product page', e)

    return {
      notFound: true,
    }
  }
}

export default Product
