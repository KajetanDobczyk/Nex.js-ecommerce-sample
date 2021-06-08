import { productsHandlers } from './products/tests-handlers'
import { productHandlers } from './product/tests-handlers'

export const handlers = [...productsHandlers, ...productHandlers]
