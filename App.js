import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import MapView from 'react-native-maps';
import CustomCallout from './CustomCallout';
import Modal from './modal';
import CustomModal from './CustomModal.js';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;


export default class App extends React.Component {
  render() {
    const markers = [
        {
          coordinate: {
            latitude: LATITUDE + SPACE,
            longitude: LONGITUDE + SPACE,
          },
        },
        {
          coordinate: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
          },
        },
        {
          coordinate: {
            latitude: LATITUDE + SPACE,
            longitude: LONGITUDE - SPACE,
          },
        },
      ];

    return (
      <View style={styles.container}>

      <Text>Shake your phone to open the developer menu.</Text>
      <CustomModal/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  customView: {
    width: 140,
    height: 100,
  },
  plainView: {
    width: 60,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

