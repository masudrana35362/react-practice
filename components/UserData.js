
import { Text,View,StyleSheet } from "react-native"
  
  export default UserData = (props) => {
    const item = props.item
    return (
      <View style={flatList.box}>
      <Text style={flatList.item} >{item.name}</Text>
      <Text style={flatList.item} >{item.email}</Text>
    </View>
    )
  
  }

const styles = StyleSheet.create({
    textStyle: {
      height: 100,
      color: '#fff',
      fontSize: 22,
      textAlign: 'center',
      backgroundColor: 'green',
      marginTop: 10,
      marginHorizontal: 10,
      padding: 10,
      borderRadius: 5,

    }
  })
  
  const flatList = StyleSheet.create({
  
    item: {
      fontSize: 20,
      color: 'white',
      flex: 1,
      padding: 10,
      borderRadius: 10,
      textAlign: 'center'
      
    },
    box: {
      flexDirection: 'row',
      borderWidth: 2,
      borderColor: 'orange',
      marginBottom: 10,
      marginHorizontal: 10,
      backgroundColor: 'green',
      borderRadius: 10,
    }
  })
  
