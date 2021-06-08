import { screen } from '@testing-library/dom'
import store from 'src/config/redux/store'
import userEvent from '@testing-library/user-event'

import { renderWithProviders } from 'src/tests/test-utils'

import ProductsList from '.'
import { mockedProducts } from '../../mocks'
import { setProducts } from '../../store/slice'

describe('ProductsList', () => {
  test('Clicking the list / grid buttons changes list display mode', () => {
    renderWithProviders(<ProductsList />)
    store.dispatch(setProducts(mockedProducts))

    const gridButton = screen.getByRole('button', { name: 'Grid' })
    const listButton = screen.getByRole('button', { name: 'List' })
    const productsList = screen.getByRole('list')

    expect(productsList).toHaveStyle({ display: 'grid' })

    userEvent.click(gridButton)
    expect(productsList).toHaveStyle({ display: 'grid' })

    userEvent.click(listButton)
    expect(productsList).toHaveStyle({ display: 'flex' })

    userEvent.click(gridButton)
    expect(productsList).toHaveStyle({ display: 'grid' })
  })
})
