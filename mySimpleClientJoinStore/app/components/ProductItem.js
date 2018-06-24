import React from 'react'

import PropTypes from 'prop-types'

import {
    StyleSheet,
    View,
    Text
} from 'react-native';

const ProductItem = ({ id, title, kind }) => {
    return (
      <View style={{backgroundColor: 'white', padding:10}}>
        <Text style={{color:'black'}}>{id} / {title} / {kind} </Text>
      </View>
    )
}

ProductItem.propTypes = {
  id    : PropTypes.number.isRequired,
  title : PropTypes.string.isRequired,
  kind  : PropTypes.string.isRequired
}

export default ProductItem
