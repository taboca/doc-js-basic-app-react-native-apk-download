const products = (state = [], action) => {
  switch (action.type) {
    case 'GET_DATA_PRODUCTS':
      console.log("reducer: Fetch the whole data array of products: ", action.data);
      state = [ ...action.data ];
      return state;
    default:
      return state
  }
}

export default products
