    import React, { useState } from 'react';
    import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
    import AsyncStorage from '@react-native-async-storage/async-storage';
    import CustomButton from "../components/CustomButton";

export default function ReceiverDashboard(props) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = async()=>{
        try {
            await AsyncStorage.clear();
            // await AsyncStorage.removeItem('username')
            // await AsyncStorage.removeItem('userType')
            console.log('Username removed from AsyncStorage');
            props.navigation.navigate('LoginHome');
        } catch (e) {
            console.log(e);
        }
    }

    function navigateToUpdateStock(){
        props.navigation.navigate('UpdateStock');
    }

    function navigateToBloodStock(){
        props.navigation.navigate('BloodStock');
    }

    function navigateToEmergency(){
        console.log("Hi MOMO");
        props.navigation.navigate('Emergency');
    }
    
    const dropdownItems = [
        { label: 'Logout', onPress: handleLogout },
    ];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
  return (
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonLeft} onPress={navigateToEmergency}>
          <Text style={styles.buttonText}>Emergency</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMiddle} onPress={navigateToUpdateStock}>
          <Text style={styles.buttonText}>Update Stock</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRight} onPress={navigateToBloodStock}>
          <Text style={styles.buttonText}>Stock Check</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    zIndex: 1,
  },
  buttonLeft: {
    backgroundColor: 'red',
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginRight: 20,
  },
  buttonMiddle: {
    backgroundColor: 'green',
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginHorizontal: 10,
},
  buttonRight: {
    backgroundColor: 'blue',
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginLeft: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
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
}
});

    

    