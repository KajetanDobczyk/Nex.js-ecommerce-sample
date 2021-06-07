import { combineReducers } from '@reduxjs/toolkit'

import productsReducer from 'src/modules/Products/store/slice'
import { IProductsState } from 'src/modules/Products/store/interfaces'

const rootReducer = combineReducers({
  products: productsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export type State = {
  products: IProductsState
}

export default rootReducer
