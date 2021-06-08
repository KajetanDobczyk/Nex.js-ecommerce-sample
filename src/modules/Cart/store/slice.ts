import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from './data'
import { IAddProductToCartPayload } from './interfaces'

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state, action: PayloadAction<IAddProductToCartPayload>) {
      const { key, product } = action.payload

      state[key] = state[key].find((item) => item.id === product.id)
        ? state[key]
        : [...state[key], product]
    },
  },
})

export const { addProductToCart } = cart.actions

export default cart.reducer
