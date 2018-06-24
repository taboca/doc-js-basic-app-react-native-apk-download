import React,  { Component }  from 'react'
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
