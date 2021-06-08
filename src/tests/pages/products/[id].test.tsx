import { mockedProduct } from 'src/modules/Product/mocks'
import { mockedProducts } from 'src/modules/Products/mocks'
import { getStaticPaths, getStaticProps } from 'src/pages/products/[id]'

describe('Product page', () => {
  test('getStaticPaths should return paths to products pages', async () => {
    const staticPaths = await getStaticPaths()

    expect(staticPaths.paths.map((path) => path.params.id)).toEqual(
      mockedProducts.map((product) => product.id.toString()),
    )
  })

  test('getStaticProps should return product with given id', async () => {
    const staticSideProps = await getStaticProps({
      params: {
        id: mockedProduct.id.toString(),
      },
    })

    expect(staticSideProps).toEqual(
      expect.objectContaining({
        props: {
          product: mockedProduct,
        },
      }),
    )
  })
})
