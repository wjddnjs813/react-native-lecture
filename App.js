import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import HelloWorld from './components/HelloWorld'
import LotsOfGreetings from './components/LotsOfGreeting';
import SimpleList from './components/SimpleList';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <HelloWorld></HelloWorld> */}
      {/* <Counter></Counter> */}
      {/* <LotsOfGreetings></LotsOfGreetings> */}
      <SimpleList></SimpleList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
