import { FetchStatus } from 'src/api/interfaces'
import { IProduct } from 'src/modules/Product/interfaces'

export interface IProductsState {
  fetchStatus: FetchStatus
  data: IProduct[]
}
