import { rest } from 'msw'

import { mockedProducts } from 'src/modules/Products/mocks'

export const productsHandlers = [
  rest.get('https://fakestoreapi.com/products', (req, res, ctx) => {
    return res(ctx.json(mockedProducts))
  }),
]
