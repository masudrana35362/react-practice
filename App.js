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

import UserData from './components/UserData';


const App = () => {

  const users = [
    {
      id: 1,
      name: "Masud",
      email: "example@gmail.com"
    },
    {
      id: 2,
      name: "Rana",
      email: "example@gmail.com"
    },
    {
      id: 3,
      name: "Milon",
      email: "example@gmail.com"
    },
    {
      id: 4,
      name: "Sajib",
      email: "example@gmail.com"

    },
    {
      id: 5,
      name: "Masud",
      email: "example@gmail.com"
    },
    {
      id: 6,
      name: "Rana",
      email: "example@gmail.com"
    },
    {
      id: 7,
      name: "Milon",
      email: "example@gmail.com"
    },
    {
      id: 8,
      name: "Sajib",
      email: "example@gmail.com"
    },
  ]

  return (
    <View>
      <Text style={{ fontSize: 24 }} >Name List showing here </Text>

      <FlatList style={{ marginBottom: 50 }}
        data={users}
        renderItem={({ item }) => <UserData item={item}/>}
        keyExtractor={item => item.id}
      />
    </View>

  );
};

export default App;
