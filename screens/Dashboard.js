import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from "../components/CustomButton";
import config from '../config';
import BackgroundLocation from '../BackgroundLocation';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import * as Notifications from 'expo-notifications';
import Icon from 'react-native-vector-icons/Feather';

TaskManager.defineTask('locationTask', async ({ data, error }) => {
    if (error) {
      console.log('Error occurred in background location task:', error);
      return;
    }
  
    if (data) {
      const { locations } = data;
      console.log('Received background locations:', locations);
  
      // Send location updates to the server or perform other actions
    }
  });
  
export default function Dashboard(props){

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    useEffect(() => {
        const requestLocationPermission = async () => {
          try {
            const { status } = await Location.requestBackgroundPermissionsAsync();
            if (status !== 'granted') {
              console.log('Background location permission not granted');
              return;
            }
    
            await Location.startLocationUpdatesAsync('locationTask', {
              accuracy: Location.Accuracy.Balanced,
              distanceInterval: 0,
              timeInterval: 60000,
            });
    
            console.log('Started location updates in the background');
          } catch (error) {
            console.log('Error occurred during location request:', error);
          }
        };
    
        requestLocationPermission();
      }, []);
    
      useEffect(() => {
        const notificationHandler = Notifications.addNotificationResponseReceivedListener(
          (response) => {
            const { data } = response.notification.request.content;
            console.log('Notification data:', data);
    
            props.navigation.navigate('AcceptRequest', { longitude: data.longitude, latitude: data.latitude });
          }
        );
    
        return () => {
          Notifications.removeNotificationSubscription(notificationHandler);
        };
      }, [props.navigation]);
      
        // Rest of the code...
    const handleLogout = async()=>{
        try {
            await AsyncStorage.clear();
            console.log('Username removed from AsyncStorage');
            props.navigation.replace('LoginHome');
        } catch (e) {
            console.log(e);
        }
    }

    const handleProfile = ()=>{
        props.navigation.navigate('UserProfile');
    }
      

    const dropdownItems = [
        { label: 'Profile', onPress: handleProfile },
        { label: 'Logout', onPress: handleLogout },
    ];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    function getCoords(){
        const API_KEY = config.API_KEY;
        const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${API_KEY}`;
        fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
        })
        .then(response => response.json())
        .then(data => {
        console.log(data.location);
        })
        .catch(error => console.error(error));
        }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.dropdownContainer} onPress={toggleDropdown}>
                {/* <Text style={styles.dropdownText}>...</Text> */}
                <Icon name="menu" size={30} color="#1E90FF" />
            </TouchableOpacity>
            {isDropdownOpen && (
                <FlatList
                    data={dropdownItems}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.dropdownItem} onPress={item.onPress}>
                            <Text style={styles.dropdownItemText}>{item.label}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}
            <Text style={styles.title}> Welcome </Text>
            <Text style={[styles.title,{fontSize: 13,color:"#fc8702"}]}> You will recieve notification when a user needs blood </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    buttonContainer: {
        position: 'absolute',
        top: 0,
        right: 60,
        margin: 10,
    },
    dropdownContainer: {
        position: 'absolute',
        right: 0,
        margin: 10,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        right: 10,
        top: 0,
    },
    dropdownText: {
        // display: 'flex',
        // flexDirection: 'column',
        // lineHeight: 0,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E90FF',
    },
    dropdownItem: {
        marginVertical: 9,
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#1E90FF',
        borderColor: 'lightgrey',
    },
    dropdownItemText: {
        fontSize: 18,
        color: '#FFFFFF',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20,
        marginHorizontal: 5,
        color: '#1E90FF',
    },
    buttonStyle: {
        padding: 10,
        marginVertical: 10,
        width: "100%",
        borderRadius: 5,
        backgroundColor: '#2196f3',
        alignItems: "center"
    },
    buttonText: {
        fontSize: 20,
        color: "#ffffff"
    }
})












