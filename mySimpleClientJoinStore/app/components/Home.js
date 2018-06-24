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
