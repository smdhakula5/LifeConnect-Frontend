
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View, Text } from 'react-native';

export default function UserProfile(props) {
  const [user, setUser] = useState(null);
  const [userId, setUserID] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    AsyncStorage.getItem('username')
      .then((value) => {
        if (value) {
          setUserID(value);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Simulate a delay of 2 seconds before making the API request
        await new Promise((resolve) => setTimeout(resolve, 10));

        const response = await fetch(`https://shy-fly-crown.cyclic.app/users/${userId}`);
        const userData = await response.json();
        console.log(userData);
        setUser(userData);
        setIsLoading(false); // Set loading state to false
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [userId]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!user) {
    return <Text>No user found.</Text>;
  }

  const { username, bloodGroup, email, phoneNumber, location, donations } = user;

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
        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.text}>{user.phoneNumber}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.text}>
          {user.location.coordinates[0] + ' ' + user.location.coordinates[1]}
        </Text>
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
    backgroundColor: '#d8fd7271',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-around',
    // marginBottom: 10,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor:'#aaaaaa',
  },
  label: {
    // flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  text: {
    flex: 2,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    paddingLeft: 10,
  },
});





