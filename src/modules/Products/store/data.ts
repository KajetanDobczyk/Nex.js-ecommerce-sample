import { IProductsState } from './interfaces'

export const initialState: IProductsState = {
  fetchStatus: 'idle',
  data: null,
}
