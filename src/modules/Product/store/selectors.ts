import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'src/config/redux/rootReducer'

export const selectProductState = (state: RootState) => state.product

export const selectProduct = createSelector(
  selectProductState,
  (productState) => productState.data,
)

export const selectProductFetchStatus = createSelector(
  selectProductState,
  (productState) => productState.fetchStatus,
)
