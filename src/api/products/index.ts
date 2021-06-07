import axios from 'axios'

import { IProduct } from 'src/modules/Product/interfaces'

type Products = {
  getProducts: () => Promise<IProduct[]>
}

const products: Products = {
  getProducts: async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products')

    return data
  },
}

export default products
