import { combineReducers } from '@reduxjs/toolkit'

import productsReducer from 'src/modules/Products/store/slice'
import productReducer from 'src/modules/Product/store/slice'
import { IProductsState } from 'src/modules/Products/store/interfaces'
import { IProductState } from 'src/modules/Product/store/interfaces'

const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export type State = {
  products: IProductsState
}

export default rootReducer
