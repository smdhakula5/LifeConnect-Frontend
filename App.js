import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './AuthContext';
import { useEffect } from 'react';
import Navigator from './routes/HomeStack';
import PushNotification from 'react-native-push-notification';
import BackgroundLocation from './BackgroundLocation';


export default function App() {
  return (
    <Navigator/>
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





