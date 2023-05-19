// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { AuthProvider } from './AuthContext';
// import { useState, useEffect } from 'react';
// import Navigator from './routes/HomeStack';
// import PushNotification from 'react-native-push-notification';
// import BackgroundLocation from './BackgroundLocation';
// import * as Location from 'expo-location';
// import * as TaskManager from 'expo-task-manager';


// export default function App() {
//   const LOCATION_TASK_NAME = 'background-location-task';

//   useEffect(() => {
//     const getPermissions = async () => {
//       // Request foreground and background location permissions
//       let { statusForeground } = await Location.requestForegroundPermissionsAsync();
//       let { statusBackground } = await Location.requestBackgroundPermissionsAsync();

//       if (statusForeground !== 'granted' || statusBackground !== 'granted') {
//         console.log("Please grant location permissions");
//         return;
//       }

//       // Start background location updates
//       await Location.startLocationUpdatesAsync('backgroundTask', {
//         accuracy: Location.Accuracy.BestForNavigation,
//         pausesUpdatesAutomatically: false,
//         showsBackgroundLocationIndicator: true,
//       });

//       // Get the current location
//       let currentLocation = await Location.getCurrentPositionAsync({});
//       setLocation(currentLocation);
//       console.log("Location:");
//       console.log(currentLocation);
//     };

//     getPermissions();

//     // Clean up background location updates when the component unmounts
//     return () => {
//       Location.stopLocationUpdatesAsync('backgroundTask');
//     };
//   }, []);
//   return (
//     <Navigator/>
//   );

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import Navigator from './routes/HomeStack';

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        // Handle permission denied
        return;
      }
  
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      
      // Send the initial location to your server or store it in state
      // Handle any necessary actions upon receiving the location
    })();
  }, []);
  

  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});






