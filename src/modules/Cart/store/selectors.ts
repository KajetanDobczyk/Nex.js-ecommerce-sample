import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'src/config/redux/rootReducer'

export const selectCartState = (state: RootState) => state.cart

export const selectCartProductsAmount = createSelector(
  selectCartState,
  (cartState) => ({
    wishlist: cartState.wishlist.length,
    shoppingBag: cartState.shoppingBag.length,
  }),
)
