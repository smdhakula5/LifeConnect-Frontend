import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from "../components/CustomButton";
// import config from '../config';
import BackgroundLocation from '../BackgroundLocation';


export default function Dashboard(props){

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = async()=>{
        try {
            await AsyncStorage.clear();
            console.log('Username removed from AsyncStorage');
            props.navigation.navigate('LoginHome');
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












