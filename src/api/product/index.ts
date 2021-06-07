import axios from 'axios'

import { IProduct } from 'src/modules/Product/interfaces'

type Product = {
  getProduct: (id: number | string | string[]) => Promise<IProduct | null>
}

const product: Product = {
  getProduct: async (id) => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)

    return data
  },
}

export default product
