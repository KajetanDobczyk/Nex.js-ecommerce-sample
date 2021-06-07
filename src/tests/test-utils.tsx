import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { Provider } from 'react-redux'
import React, { ComponentType, ReactElement } from 'react'

import store from 'src/config/redux/store'

const Providers: React.FC = ({ children }): ReactElement => (
  <Provider store={store}>{children}</Provider>
)

const renderWithProviders = (
  ui: ReactElement,
  options?: RenderOptions,
): RenderResult =>
  render(ui, {
    wrapper: Providers as ComponentType,
    ...options,
  })
