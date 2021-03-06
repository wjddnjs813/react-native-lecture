import React, { useCallback, useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SelectedItem from './SelectedItem';

const simpleData = [
  {id:1, title:"Lorem ipsum dolor sit amet"},
  {id:2, title:"consectetur adipiscing elit, sed do eiusmod tempor"},
  {id:3, title:"incididunt ut labore et dolore magna aliqua"},
]

const SimpleList = () => {
  const [item, setItem] = useState({});

  const itemPressed = useCallback((data)=>{
    console.log(data);
    setItem(data);
  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {
        simpleData.map(data => {
          return (
            <TouchableOpacity key={data.id} onPress={() => itemPressed(data)}>
              <Text>{ data.id } { data.title }</Text>
            </TouchableOpacity>
          )
        })
      }

      <Text style={{marginBottom: 10, marginTop: 30, fontWeight: "bold"}}>Selected</Text>

      <SelectedItem item={item}></SelectedItem>
    </View>
  )
}

export default SimpleList;