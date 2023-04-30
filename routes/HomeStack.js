// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from '@react-navigation/native';
// import React, { useState } from 'react';

// import LoginHome from '../screens/LoginHome';
// import Dashboard from '../screens/Dashboard';
// import Login from '../screens/Logins/Login';
// import SignUp from '../screens/Logins/SignUp';
// import AsyncStorage from '@react-native-community/async-storage';


// const Stack = createNativeStackNavigator();

// export default function HomeStack(){

//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     return (
//         <NavigationContainer>
//             {try{
//                 const value = await AsyncStorage.getItem('@isVerified');
//                 if(value!=null){
//                     setIsLoggedIn(true);
//                 }
//             }
//             catch(error){
//                 console.log(error);
//             }}
//             <Stack.Navigator initialRouteName={isLoggedIn ? 'Dashboard' : 'LoginHome'}>
//             <Stack.Screen name='LoginHome' component={LoginHome} />
//             <Stack.Screen name='Login' component={Login} />
//             <Stack.Screen name='SignUp' component={SignUp} />
//             <Stack.Screen name='Dashboard' component={Dashboard} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }


/*
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

import LoginHome from '../screens/LoginHome';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Logins/Login';
import SignUp from '../screens/Logins/SignUp';
import * as Keychain from 'react-native-keychain';
import { AuthContext } from '../AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Stack = createNativeStackNavigator();

export default function HomeStack(){

    //const [mounted, setMounted] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        AsyncStorage.getItem('username').then((value)=>{
            if(value){
                setIsLoggedIn(true);
            }
        }).catch((err)=>{
            console.log(err);
        })
    },[]);
    // console.log("isLoggedIn: ", isLoggedIn);
    // console.log("initialRouteName: ", isLoggedIn? 'Dashboard' : 'LoginHome');

    // if (!mounted) {
    //     return null;
    // }

    if(!isLoggedIn){
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName='LoginHome'>
                    <Stack.Screen name='LoginHome' component={LoginHome} />
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='SignUp' component={SignUp} />
                    <Stack.Screen name='Dashboard' component={Dashboard} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Dashboard'>
                <Stack.Screen name='LoginHome' component={LoginHome} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='SignUp' component={SignUp} />
                <Stack.Screen name='Dashboard' component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

*/

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import LoginHome from '../screens/LoginHome';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Logins/Login';
import SignUp from '../screens/Logins/SignUp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserProfile from "../screens/UserProfile";

const Stack = createNativeStackNavigator();

export default function HomeStack(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        //also fetch usertype from Asyncstorage
        AsyncStorage.getItem('username').then((value)=>{
            if(value){
                setIsLoggedIn(true);
            }
        }).catch((err)=>{
            console.log(err);
        })
    },[]);

    return(
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName={()=>{
                if(isLoggedIn){
                    return 'Dashboard'
                }
                else{
                    return 'LoginHome';
                }
                }}>
                <Stack.Screen name='LoginHome' component={LoginHome} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='SignUp' component={SignUp} />
                <Stack.Screen name='Dashboard' component={Dashboard} />
                <Stack.Screen name='UserProfile' component={UserProfile}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

    // if(!isLoggedIn){
    //     return(
    //         <NavigationContainer>
    //             <Stack.Navigator initialRouteName={'LoginHome'}>
    //                 <Stack.Screen name='LoginHome' component={LoginHome} />
    //                 <Stack.Screen name='Login' component={Login} />
    //                 <Stack.Screen name='SignUp' component={SignUp} />
    //                 <Stack.Screen name='Dashboard' component={Dashboard} />
    //                 <Stack.Screen name='UserProfile' component={UserProfile}/>
    //             </Stack.Navigator>
    //         </NavigationContainer>
    //     );
    // }
    // // else if(isLoggedIn && userType==='Hospital'){

    // // }    
    // else{
    // return (
    //     <NavigationContainer>
    //         <Stack.Navigator initialRouteName='Dashboard'>
    //             <Stack.Screen name='Dashboard' component={Dashboard} />
    //             <Stack.Screen name='UserProfile' component={UserProfile}/>
    //         </Stack.Navigator>
    //     </NavigationContainer>
    // );
    // }

}

