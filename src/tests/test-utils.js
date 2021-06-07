import { render } from '@testing-library/react'

const Providers = ({ children }) => {
  return <>{children}</>
}

export const renderWithProviders = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })
