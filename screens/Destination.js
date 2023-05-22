import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Destination(props) {
  const { longitude, latitude } = props.route.params;

  // Convert the coordinates from strings to numbers
  const parsedLongitude = parseFloat(longitude);
  const parsedLatitude = parseFloat(latitude);

  // Define the initial region based on the provided coordinates
  const initialRegion = {
    longitude: parsedLongitude,
    latitude: parsedLatitude,
    longitudeDelta: 0.0922, // Adjust the zoom level as needed
    latitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Marker coordinate={{ longitude: parsedLongitude, latitude: parsedLatitude }} />
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      flex: 1,
    },
  });




