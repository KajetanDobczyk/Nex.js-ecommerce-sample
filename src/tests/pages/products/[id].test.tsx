import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

import { mockedProduct } from 'src/modules/Product/mocks'
import { setProduct } from 'src/modules/Product/store/slice'
import { mockedProducts } from 'src/modules/Products/mocks'
import Product, {
  getStaticPaths,
  getStaticProps,
} from 'src/pages/products/[id]'
import { renderWithProviders, testStore } from 'src/tests/test-utils'

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

  test('Adding item to cart should update the counters in header', () => {
    renderWithProviders(<Product product={mockedProducts[0]} />)

    const wishlistButton = screen.getByRole('button', {
      name: 'Add to Wishlist',
    })
    const shoppingBagButton = screen.getByRole('button', {
      name: 'Add to Shopping Bag',
    })
    const wishlistCounter = screen.getByTestId('wishlist-counter')
    const shoppingBagCounter = screen.getByTestId('shopping-bag-counter')

    expect(wishlistCounter).toEqual('0')
    expect(shoppingBagCounter).toEqual('0')

    userEvent.click(wishlistButton)
    expect(wishlistCounter).toEqual('1')
    expect(shoppingBagCounter).toEqual('0')
    userEvent.click(shoppingBagButton)
    expect(wishlistCounter).toEqual('1')
    expect(shoppingBagCounter).toEqual('1')

    testStore.dispatch(setProduct(mockedProducts[1]))

    userEvent.click(shoppingBagButton)
    expect(wishlistCounter).toEqual('1')
    expect(shoppingBagCounter).toEqual('2')
    userEvent.click(wishlistButton)
    expect(wishlistCounter).toEqual('2')
    expect(shoppingBagCounter).toEqual('2')
  })
})
