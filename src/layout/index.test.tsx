import { screen } from '@testing-library/dom'

import { renderWithProviders } from 'src/tests/test-utils'

import Layout from '.'

describe('Layout', () => {
  test('Displays breadcrumbs when showBreadcrumbs prop passed', () => {
    renderWithProviders(<Layout title="Test" showBreadcrumbs />)

    expect(screen.getByRole('link')).toHaveAttribute('href', '/')
  })
})
