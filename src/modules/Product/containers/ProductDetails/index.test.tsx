import { screen } from '@testing-library/dom'

import { renderWithProviders, testStore } from 'src/tests/test-utils'

import ProductDetails from '.'
import { setProduct } from '../../store/slice'
import { mockedProduct } from '../../mocks'
import userEvent from '@testing-library/user-event'

describe('ProductDetails', () => {
  beforeEach(() => {
    renderWithProviders(<ProductDetails />)
    testStore.dispatch(setProduct(mockedProduct))
  })

  test('Displays all required product details on page', () => {
    expect(
      screen.getByRole('heading', { name: mockedProduct.title }),
    ).toBeInTheDocument()
    expect(screen.getByText(mockedProduct.category)).toBeInTheDocument()
    expect(screen.getByText(mockedProduct.description)).toBeInTheDocument()
    expect(screen.getByText(`$${mockedProduct.price}`)).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: mockedProduct.title }),
    ).toBeInTheDocument()
  })

  test('Disables proper button and changes content after adding item to wishlist', () => {
    const wishlistButton = screen.getByRole('button', {
      name: 'Add to Wishlist',
    })
    const shoppingBagButton = screen.getByRole('button', {
      name: 'Add to Shopping Bag',
    })

    expect(wishlistButton).toBeEnabled()
    expect(shoppingBagButton).toBeEnabled()

    userEvent.click(wishlistButton)
    expect(wishlistButton).toBeDisabled()
    expect(wishlistButton).toHaveTextContent('Already in Wishlist')
    expect(shoppingBagButton).toBeEnabled()
    expect(shoppingBagButton).toHaveTextContent('Add to Shopping Bag')
  })

  test('Disables proper button and changes content after adding item to shopping bag', () => {
    const wishlistButton = screen.getByRole('button', {
      name: 'Add to Wishlist',
    })
    const shoppingBagButton = screen.getByRole('button', {
      name: 'Add to Shopping Bag',
    })

    userEvent.click(shoppingBagButton)
    expect(shoppingBagButton).toBeDisabled()
    expect(shoppingBagButton).toHaveTextContent('Already in Shopping Bag')
    expect(wishlistButton).toBeEnabled()
    expect(wishlistButton).toHaveTextContent('Add to Wishlist')
  })
})
