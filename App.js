import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import CardScreen from './components/card';

export default function App() {
  const [showMarkdown, setShowMarkdown] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setShowMarkdown(!showMarkdown)}
      >
      <Icons
        reverse 
        name="arrow-down-drop-circle-outline" 
        size={23} 
        color="#517fa4" />
      </TouchableOpacity>
      {showMarkdown == false ? null : (
        <View>
          <CardScreen>
          <View style={styles.buttonStyle}>
                    <Button color={'#F8CD81'} title='Reset' onPress={() => {}} />
                    <Button color={'#D17B47'} title='Confirm' onPress={() => {}} />
          </View>
          </CardScreen>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 25
},
});
