import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'src/config/redux/rootReducer'
import { selectCartState } from 'src/modules/Cart/store/selectors'

export const selectProductState = (state: RootState) => state.product

export const selectProduct = createSelector(
  selectProductState,
  (productState) => productState.data,
)

export const selectProductFetchStatus = createSelector(
  selectProductState,
  (productState) => productState.fetchStatus,
)

export const selectIsProductInCart = createSelector(
  selectProduct,
  selectCartState,
  (product, cartState) => ({
    wishlist: Boolean(
      cartState.wishlist.find((cartProduct) => cartProduct.id === product?.id),
    ),
    shoppingBag: Boolean(
      cartState.shoppingBag.find(
        (cartProduct) => cartProduct.id === product?.id,
      ),
    ),
  }),
)
