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
