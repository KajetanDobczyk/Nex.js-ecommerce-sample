import { render, screen } from '@testing-library/react'

import ProductTile from '.'

test('Product tile renders correctly', async () => {
  render(<ProductTile />)

  expect(screen.getByText('Product tile')).toBeInTheDocument()
})
