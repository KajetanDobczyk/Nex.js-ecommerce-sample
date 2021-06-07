import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IProduct } from 'src/modules/Product/interfaces'

import { initialState } from './data'

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProduct[] | null>) {
      state.data = action.payload
      state.fetchStatus = action.payload ? 'succeeded' : 'failed'
    },
  },
})

export const { setProducts } = products.actions

export default products.reducer
