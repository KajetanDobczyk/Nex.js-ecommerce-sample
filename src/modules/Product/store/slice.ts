import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IProduct } from '../interfaces'
import { initialState } from './data'

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct(state, action: PayloadAction<IProduct>) {
      state.data = action.payload
      state.fetchStatus = 'succeeded'
    },
    getProductFailed(state) {
      state.data = null
      state.fetchStatus = 'failed'
    },
  },
})

export const { setProduct, getProductFailed } = products.actions

export default products.reducer
