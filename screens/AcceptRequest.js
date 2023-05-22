import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';

export default function AcceptRequest(props) {
  console.log(props.route.params.longitude);
  console.log(props.route.params.latitude);
  function handleClick(){
    const { longitude, latitude } = props.route.params;
    props.navigation.navigate('Destination', { longitude, latitude });
  }
  return (
    <ImageBackground
      source={require('../assets/images/Tommy.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleClick}>
          <Text style={styles.buttonText}>Accept Request</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10, // Adjust the marginLeft as needed
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});









