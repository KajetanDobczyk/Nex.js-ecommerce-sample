import { render, screen } from '@testing-library/react'

import { mockedProduct } from 'src/modules/Product/mocks'

import ProductTile from '.'

test('Product tile renders correctly', async () => {
  render(<ProductTile product={mockedProduct} isOnGrid={true} />)

  expect(
    screen.getByRole('heading', { name: mockedProduct.title }),
  ).toBeInTheDocument()
  expect(screen.getByText(`$${mockedProduct.price}`)).toBeInTheDocument()
  expect(
    screen.getByRole('img', { name: mockedProduct.title }),
  ).toBeInTheDocument()
  expect(screen.getByRole('link')).toHaveAttribute(
    'href',
    `/products/${mockedProduct.id}`,
  )
})
