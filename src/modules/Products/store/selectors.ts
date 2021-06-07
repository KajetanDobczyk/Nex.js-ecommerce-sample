import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'src/config/redux/rootReducer'

export const selectProductsState = (state: RootState) => state.products

export const selectProducts = createSelector(
  selectProductsState,
  (productsState) => productsState.data,
)

export const selectProductsFetchStatus = createSelector(
  selectProductsState,
  (productsState) => productsState.fetchStatus,
)
