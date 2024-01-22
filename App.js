/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {


  return (
    <View style= {styles.main}>
      <Pressable style={styles.pressAble}>
        <Text> Update Button</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({

  main: {
    flex:1,
    justifyContent: 'center'
  },
  pressAble:{
    backgroundColor: 'blue',
    padding:10,
    margin: 10,
    color: '#fff',
    borderRadius: 10,
    fontSize: 20,
    textAlign: 'center'
  }

})
export default App;
