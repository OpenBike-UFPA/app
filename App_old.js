import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import {Station} from './Station';
import { Button } from 'react-native-elements';
import { List, ListItem } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button title='BUTTON' />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
