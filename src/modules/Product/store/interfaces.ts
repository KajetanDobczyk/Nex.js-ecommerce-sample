import { FetchStatus } from 'src/api/interfaces'

import { IProduct } from '../interfaces'

export interface IProductState {
  fetchStatus: FetchStatus
  data: IProduct | null
}
