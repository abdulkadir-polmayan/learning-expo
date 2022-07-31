import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {



  return (
    <View style={styles.container}>
      
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
      
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
