
import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginHome from '../screens/LoginHome';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Logins/Login';
import SignUp from '../screens/Logins/SignUp';
import UserProfile from '../screens/UserProfile';
import ReceiverDashboard from '../screens/ReceiverDashboard';
import UpdateStock from "../screens/UpdateStock";
import Emergency from '../screens/Emergency';
import BloodStock from '../screens/BloodStock';
import MapMarker from '../screens/MapMarker';
import AcceptRequest from '../screens/AcceptRequest';
import Destination from '../screens/Destination';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  const [showComponent, setShowComponent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');

  useEffect(() => {
    // Fetch user data from local storage when the component mounts
    async function fetchUserData() {
      const username = await AsyncStorage.getItem('username');
      const userType = await AsyncStorage.getItem('userType');

      if (username && userType) {
        setIsLoggedIn(true);
        setUserType(userType);
      }
    }
    fetchUserData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showComponent && (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={
              !isLoggedIn ? 'LoginHome' : userType === 'donor' ? 'Dashboard' : 'ReceiverDashboard'
            }
          >
            <Stack.Screen name="LoginHome" component={LoginHome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="UserProfile" component={UserProfile} />
            <Stack.Screen name="ReceiverDashboard" component={ReceiverDashboard} />
            <Stack.Screen name="UpdateStock" component={UpdateStock}/>
            <Stack.Screen name="Emergency" component={Emergency} />
            <Stack.Screen name="BloodStock" component={BloodStock}/>
            <Stack.Screen name='MapMarker' component={MapMarker}/>
            <Stack.Screen name='AcceptRequest' component={AcceptRequest}/>
            <Stack.Screen name='Destination' component={Destination}/>
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}





























