import { screen } from '@testing-library/dom'

import store from 'src/config/redux/store'
import { renderWithProviders } from 'src/tests/test-utils'

import ProductDetails from '.'
import { setProduct } from '../../store/slice'
import { mockedProduct } from '../../mocks'

describe('ProductDetails', () => {
  test('Displays all required product details on page', () => {
    renderWithProviders(<ProductDetails />)
    store.dispatch(setProduct(mockedProduct))

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
})
