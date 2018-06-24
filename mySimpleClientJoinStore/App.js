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
