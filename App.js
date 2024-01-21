/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';


const App= () =>{
  const [name,setName] = useState("")
  const [designation, setDes]= useState("Android Developer")
  const [education, setEducation]= useState('Dhaka Internation University')
  const [company, setCompany] = useState("Smart Think")
  return (
    <View>
      <Image src='https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/361600844_1218591449537561_4396145516300964363_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeF-SAeBjRfQcx5LMMOhX4n-CqgI8i0KxQwKqAjyLQrFDFuHq_Wx84BpkeZEdY58q1YobUAiuM6i8CahfuyscWJX&_nc_ohc=-DsKjvMwM8cAX_wbocp&_nc_ht=scontent.fdac157-1.fna&oh=00_AfBmWK-ms3KXeJDP-wkqpue0wgGmor0pGVVT4gwAkdIXQw&oe=65B23A2C'></Image>
      <Text style={styles.textStyle}>{name}</Text>
      <Text style={styles.textStyle}>{designation}</Text>
      <Text style={styles.textStyle}>{company}</Text>
      <Text style={styles.textStyle}>{education}</Text>
      <TextInput 
      style={styles.textInput}
      placeholder='Enter your name'
      value={name}
      onChangeText={(text)=>setName(text)}
      />
<View  style={styles.buttonStyle}>
<Button
       title='Update' onPress={()=>setDes("Mobile App Developer")} ></Button>

</View>
    </View>

  );
};

const styles=StyleSheet.create({
  textStyle:{
    color: '#fff',
    fontSize: 16,
    backgroundColor: 'green',
    marginTop:10,
    marginHorizontal:10,
    padding:5,
    borderRadius:5

  },
  buttonStyle:{
    color: 'green',
    marginHorizontal:30,
    marginTop:20,
    borderRadius:10
  },
  textInput:{
    fontSize:14,
    color: 'black',
    borderWidth: 2,
    borderColor: "blue",
    marginHorizontal:20,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
  }
})



export default App;
