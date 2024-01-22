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
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {

  const [showModal,setShowModal] = useState(false)

  return (
    <View style={styles.main}>

      <Modal
       transparent={true} 
      visible={showModal}
      animationType='fade'

      >

        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}> this is modal</Text>
            <Button title='Cloase Modal' onPress={()=> setShowModal(false)}/>
          </View>
        </View>


      </Modal>

      <View style={styles.buttonView}>
        <Button title='Open Modal' onPress={()=>setShowModal(true)} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  centerView: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: 'white',
    padding:40,
    borderRadius:20,
    shadowColor: 'black',
    elevation: 5,
  },
  modalText:{
    marginBottom: 10,
    fontSize:20
  }

})

export default App;
