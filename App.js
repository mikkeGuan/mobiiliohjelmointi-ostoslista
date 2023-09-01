import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, TextInput, View, FlatList, Text } from 'react-native';

export default function App() {
  const [product, setProduct] = useState ("");
  const [items, setItems] = useState([]);
  const [maara, setMaara] = useState("");
  const addProduct = () => { 
    setItems([product, maara, ...items]);
    setProduct("");
    setMaara("");
  }

  const clearProducts = () => {

    setItems([]);
  }

  const ItemSeparator = () => {
    return(
      <View style={{width: "100%" , height: 2, backgroundColor: "purple"}}></View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row"}} >
      <TextInput placeholder='Product' placeholderTextColor={"gray"} textAlign='center' 
      style={{width: 150, borderColor: "blue", borderWidth: 1}}
      value={product}
      onChangeText={text =>setProduct(text)}
      />
      <TextInput placeholder='Amount' placeholderTextColor={"gray"} textAlign='center'
      style={{width: 150, borderColor: "blue", borderWidth: 1}}
      value={maara}
      onChangeText={text =>setMaara(text)}
      />
    
      </View>
      <View style={{flexDirection: "row"}} >
    <Button title ="Add" onPress={addProduct}/>
    <Button title ="Clear" onPress={clearProducts}></Button>
    </View>
    <Text  style={{fontSize: 20, color: "blue"}}>Shoppinglist</Text>
    <FlatList
      data={items}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => 
      <Text style={{fontSize: 18}}>{item}</Text> }

   />
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    marginLeft: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dotted'
  },

});
