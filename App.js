/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';


const App = () => {

  const users = [
    {
      id: 1,
      name: "Masud"
    },
    {
      id: 2,
      name: "Rana"
    },
    {
      id: 3,
      name: "Milon"
    },
    {
      id: 4,
      name: "Sajib"
    },

  ]

  return (
    <View>
      <Text style={{ fontSize: 24 }} >Name List showing here </Text>

      <FlatList 
      data={users}
      renderItem={({item})=> <Text style= {styles.textStyle} >{item.name}</Text>}
      keyExtractor={item=> item.id}
      />

    </View>

  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: '#fff',
    fontSize: 16,
    backgroundColor: 'green',
    marginTop: 10,
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 5

  }
})



export default App;
