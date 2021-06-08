import { combineReducers } from '@reduxjs/toolkit'

import productsReducer from 'src/modules/Products/store/slice'
import productReducer from 'src/modules/Product/store/slice'
import cartReducer from 'src/modules/Cart/store/slice'
import { IProductsState } from 'src/modules/Products/store/interfaces'
import { IProductState } from 'src/modules/Product/store/interfaces'
import { ICartState } from 'src/modules/Cart/store/interfaces'

const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export type State = {
  products: IProductsState
  product: IProductState
  cart: ICartState
}

export default rootReducer
