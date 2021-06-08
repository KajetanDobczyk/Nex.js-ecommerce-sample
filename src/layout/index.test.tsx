import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'

import Layout from '.'

describe('Layout', () => {
  test('Displays breadcrumbs when showBreadcrumbs prop passed', async () => {
    render(<Layout title="Test" showBreadcrumbs />)

    expect(screen.getByRole('link')).toHaveAttribute('href', '/')
  })
})
