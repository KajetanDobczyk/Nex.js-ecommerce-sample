import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './data'

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {},
})

export const {} = products.actions

export default products.reducer
