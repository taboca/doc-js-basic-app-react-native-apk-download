# This is part of the "Struggling with JavaScript" aka doc-js book

* https://leanpub.com/doc-js
* If you want to contribute to the book or join me as a coauthor pool, please get in contact mgalli at mgalli dot com subject "doc-js book"

# Example of React Native Redux app bringing a collection of products to the screen

If you have not setup your infrastructure for launching React Native, check the session/chapter for that (make sure you have $ create-react-native-app in your path and working).

## Pretesting the sample to see if works

Git clone [this repository](https://github.com/taboca/doc-js-example-react-native-redux-join-jogic-store), then:

```
cd mySimpleClientJoinStore
npm install
npm start
```

## Recap of what I did to get here - you can also look at the commits

All the following section is the dump of the things I had to do to get to here:

```
create-react-native-app mySimpleClientJoinStore
cd mySimpleClientJoinStore
```

Let's install redux and the native compatibility modules:
```
npm install --save redux
npm install --save react-redux
npm install --save redux-thunk
```

(Marcio have no idea what thunk is really for at this point in writing this book)

## Adding the redux "app" initial folder structure

```
mkdir app
cd app
mkdir reducers
mkdir actions
mkdir containers
mkdir components
```

### ./app/data_products.json — a static file to be loaded

This fill be be used statically loaded based on a given action. In the first stage of this example, we will just dump each product to the screen.

```
{
  "product": [
    {
      "id": "1",
      "title": "Coca-cola",   
      "kind" : "unhealthy"
    },
    {
      "id": "2",
      "title": "Fanta",
      "kind" : "unhealthy"
    }
  ]
}

```

### Action ./app/actions/index.js

```
import Data from '../data_products.json'

export const get_data_products = () => {
  console.log(Data.products);
  return ({
    type: 'GET_DATA_PRODUCTS',
    data: Data.products
  })
}

```

### Reducer for products ./app/reducers/products.js

```
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

```

### Combining the reducers ./app/reducers/index.js

So far, we have only one:

```
import { combineReducers } from 'redux'
import products from './products'

export default combineReducers({
  products
})

```

### The container for ListProducts ./app/containers/ListProducts.js

```
import { connect } from 'react-redux'
import ListProducts from '../components/ListProducts'

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps)(ListProducts)

```

### The component ./app/components/ListProducts.js

```
React,  { Component }  from 'react'
import PropTypes from 'prop-types'
import ProductItem from './ProductItem'

import {
    StyleSheet,
    View,
} from 'react-native';

const ListProducts = ({ products }) => {
  console.log(products);
  return (
    <View style={{flex:1, backgroundColor: 'lightgray', padding:20}}>
      {products.map(item =>
        <ProductItem key={item.id} {...item}>
        </ProductItem>
      )}
    </View>
  )
}

ListProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id    : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    kind  : PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default ListProducts
```

### The container for a load button ./app/containers/LoadButton.js

```
import { connect } from 'react-redux'
import { get_data_products } from '../actions'
import LoadButton from '../components/LoadButton'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  get_data_products: () => dispatch(get_data_products())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoadButton);
```

### The component for the load button ./app/components/LoadButton.js

```
import React from 'react'
import { connect } from 'react-redux'

import {
    Button
} from 'react-native';

const LoadButton = ({ get_data_products }) => {

  function handlePress() {
    get_data_products();
  }

  return (
    <Button
     onPress={ () => { handlePress() } }
     title="Load"
     color="gray"
     accessibilityLabel=""
    />
  )
}

export default connect()(LoadButton)
```

### The component for the Home to tie all

```
import React from 'react'
import ListProducts  from '../containers/ListProducts'
import LoadButton  from '../containers/LoadButton'

import {
    StyleSheet,
    View
} from 'react-native';

const Home = () => (
  <View style={{flex:1, backgroundColor: 'lightgray', padding:20}}>
    <LoadButton />
    <ListProducts />
  </View>
)

export default Home
```

### ./app/configStore.js

```
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../app/reducers/index';

export default createStore(reducers, applyMiddleware(thunk));
```

### The main app ties the Home with the store
```
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import store from './app/configStore'
import { Provider } from 'react-redux'
import Home  from './app/components/Home'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Home />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

```

### Pull the tree at this stage and test it

Before you move on, if you want, you can pull the tree at this stage, using this [ref](https://github.com/taboca/doc-js-example-react-native-redux-join-jogic-store/tree/08ff65acd6343e511a938fa298489d5a11cfea99)

Let's test:

```
npm start
```

## References

* https://medium.com/@mosesesan/tutorial-react-native-redux-boilerplate-4899f5c4f431
