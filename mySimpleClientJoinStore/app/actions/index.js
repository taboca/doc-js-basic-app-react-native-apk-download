import Data from '../data_products.json'

export const get_data_products = () => {
  console.log(Data.products);
  return ({
    type: 'GET_DATA_PRODUCTS',
    data: Data.products
  })
}
