import { render, screen } from '@testing-library/react'

import Home from 'src/pages'

test('App renders correctly', async () => {
  render(<Home />)

  expect(
    screen.getByRole('heading', { name: 'Welcome to Next.js!' }),
  ).toBeInTheDocument()
})
