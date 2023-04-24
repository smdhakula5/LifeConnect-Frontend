import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View, Text } from 'react-native';

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [userId,setUserID] = useState(null);

  useEffect(()=>{
    //also fetch usertype from Asyncstorage
    AsyncStorage.getItem('username').then((value)=>{
        if(value){
            setUserID(value);
        }
    }).catch((err)=>{
        console.log(err);
    })
},[]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3000/users/${userId}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  },[userId]);

  if (!user) {
    return <Text>Loading...</Text>;
  }

  const { username, bloodGroup, email, phoneNumber, address, donations } = user;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.text}>{user.userName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Blood Group:</Text>
        <Text style={styles.text}>{user.bloodGroup}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>{email}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.text}>{user.phoneNumber}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.text}>{user.permanentAddress.latitude+"  "+user.permanentAddress.longitude}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Donations:</Text>
        <Text style={styles.text}>{donations}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  text: {
    flex: 2,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
});




