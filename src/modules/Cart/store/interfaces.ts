import { IProduct } from 'src/modules/Product/interfaces'

export type ICartStateKey = 'wishlist' | 'shoppingBag'

export type ICartState = Record<ICartStateKey, IProduct[]>

export interface IAddProductToCartPayload {
  key: ICartStateKey
  product: IProduct
}
