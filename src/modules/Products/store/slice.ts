import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IProduct } from 'src/modules/Product/interfaces'

import { initialState } from './data'

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.data = action.payload
      state.fetchStatus = 'succeeded'
    },
    getProductsFailed(state) {
      state.data = []
      state.fetchStatus = 'failed'
    },
  },
})

export const { setProducts, getProductsFailed } = products.actions

export default products.reducer
