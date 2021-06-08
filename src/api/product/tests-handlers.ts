import { rest } from 'msw'

import { mockedProduct } from 'src/modules/Product/mocks'

export const productHandlers = [
  rest.get('https://fakestoreapi.com/products/:id', (req, res, ctx) => {
    return res(ctx.json(mockedProduct))
  }),
]
