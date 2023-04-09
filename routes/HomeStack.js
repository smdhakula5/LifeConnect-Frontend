import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';

import LoginHome from '../screens/LoginHome';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Logins/Login';
import SignUp from '../screens/Logins/SignUp';

const Stack = createNativeStackNavigator();

export default function HomeStack(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isLoggedIn ? 'Dashboard' : 'LoginHome'}>
            <Stack.Screen name='LoginHome' component={LoginHome} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='Dashboard' component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}