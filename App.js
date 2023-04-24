import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './AuthContext';
import Navigator from './routes/HomeStack'

export default function App() {

  return (
    <Navigator/>
  );

  // const handleOpenMaps = () => {
  //   const location = 'San Francisco, CA';
  //   const url = `https://www.google.com/maps/search/?api=1&query=${location}`;
  //   Linking.openURL(url);
  // };

  // return (
  //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //     <Button title="Open Maps" onPress={handleOpenMaps} />
  //   </View>
  // );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
