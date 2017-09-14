import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import MapView from 'react-native-maps';
import CustomCallout from './CustomCallout';
import Modal from './modal';
import CustomModal from './CustomModal.js';
import Map from './Map';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <Map />
    
      <CustomModal /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

