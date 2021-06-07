import { GetStaticProps, NextPage } from 'next'

import { api } from 'src/api'
import Layout from 'src/layout'
import { IProduct } from 'src/modules/Product/interfaces'

type Props = {
  product: IProduct
}

const Product: NextPage<Props> = ({ product }) => (
  <Layout title={product.title}>Product page</Layout>
)

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
