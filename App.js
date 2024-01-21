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
  ScrollView,
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
    {
      id: 5,
      name: "Masud"
    },
    {
      id: 6,
      name: "Rana"
    },
    {
      id: 7,
      name: "Milon"
    },
    {
      id: 8,
      name: "Sajib"
    },
  ]

  return (
    <View>
      <Text style={{ fontSize: 24 }} >Name List showing here </Text>

      {/* <FlatList
        data={users}
        renderItem={({ item }) => <Text style={styles.textStyle} >{item.name}</Text>}
        keyExtractor={item => item.id}
      /> */}
      <ScrollView style={{marginBottom:50}}>
        {
          users.map((item) => <Text style={styles.textStyle} >{item.name}</Text>)
        }
      </ScrollView>



    </View>

  );
};

const styles = StyleSheet.create({
  textStyle: {
    height: 100,
    color: '#fff',
    fontSize: 22,
    backgroundColor: 'green',
    marginTop: 10,
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 5

  }
})



export default App;
