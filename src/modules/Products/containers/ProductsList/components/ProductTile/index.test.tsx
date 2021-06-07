import { render, screen } from '@testing-library/react'
import { sampleProduct } from 'src/modules/Product/mocks'

import ProductTile from '.'

test('Product tile renders correctly', async () => {
  render(<ProductTile product={sampleProduct} />)

  expect(
    screen.getByRole('heading', { name: /Fjallraven/ }),
  ).toBeInTheDocument()
  expect(screen.getByText('$109.95')).toBeInTheDocument()
  expect(screen.getByRole('img', { name: /Fjallraven/ })).toBeInTheDocument()
  expect(screen.getByRole('link')).toHaveAttribute('href', '/products/1')
})
