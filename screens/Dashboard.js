/*
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from "../components/CustomButton";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Dashboard(props){

    const handleLogout = ()=>{
        AsyncStorage.removeItem('username')
    .then(() => {
        // setIsLoggedIn(false);
        console.log('Username removed from AsyncStorage');
        navigation.navigate('LoginHome');
    })
    .catch((err) => {
        console.log(err);
    });

    }
    return(
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <CustomButton onPress={handleLogout} title={"Logout"} />
            </View>
            <Text> Dashboard </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 10,
    }
})
*/

import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import CustomButton from "../components/CustomButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function Dashboard(props){

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = ()=>{
        AsyncStorage.removeItem('username')
        .then(() => {
            console.log('Username removed from AsyncStorage');
            navigation.navigate('LoginHome');
        })
        .catch((err) => {
            console.log(err);
        });
    }

    const handleProfile = ()=>{
        props.navigation.navigate('UserProfile');
        // code to show user profile
    }

    const dropdownItems = [
        { label: 'Profile', onPress: handleProfile },
        { label: 'Logout', onPress: handleLogout },
    ];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.dropdownContainer} onPress={toggleDropdown}>
                <Text style={styles.dropdownText}>...</Text>
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
            {/* <View style={styles.buttonContainer}>
                <CustomButton onPress={handleLogout} title={"Logout"} />
            </View> */}
            <Text style={styles.title}> Dashboard </Text>
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
        top: 0,
        right: 0,
        margin: 10,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        right: 10,
        top: 40,
    },
    dropdownText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E90FF',
    },
    dropdownItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },
    dropdownItemText: {
        fontSize: 18,
        color: '#1E90FF',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#1E90FF',
    },
})





