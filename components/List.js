import React from 'react';
import { Text, View, Button } from 'react-native';

const List = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>List</Text>
      <Button 
        title="Go To Details" 
        onPress={()=>{navigation.navigate("Details", {id: 1})}} 
      />
    </View>
  )
}
export default List;