import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapMarker(props){
  const { locations } = props.route.params;
  const region = {
    latitude: 17.4432902,
    longitude: 78.4874663,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        {locations.map((location, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: location.location.coordinates[1], longitude: location.location.coordinates[0]}}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});








