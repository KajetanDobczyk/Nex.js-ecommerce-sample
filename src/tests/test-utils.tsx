import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { Provider } from 'react-redux'
import React, { ComponentType, ReactElement } from 'react'

import { makeStore } from 'src/config/redux/store'

export let testStore = makeStore()

export const renderWithProviders = (
  ui: ReactElement,
  options?: RenderOptions,
): RenderResult => {
  testStore = makeStore()

  const Providers: React.FC = ({ children }): ReactElement => (
    <Provider store={testStore}>{children}</Provider>
  )

  return render(ui, {
    wrapper: Providers as ComponentType,
    ...options,
  })
}
