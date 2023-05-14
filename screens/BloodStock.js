import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BloodStock(props) {
  const [bloodTypes, setBloodTypes] = useState({});
  const [requiredTypes,setRequiredTypes] = useState({});
  const [userId, setUserId] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('username').then((value) => {
      if (value) {
        setUserId(value);
      }
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://shy-fly-crown.cyclic.app/users/${userId}/check`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const userData = await response.json();
        console.log(userData);
        setBloodTypes(userData.quantities);
        if (userData.required) {
          setRequiredTypes(userData.required);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [userId]);
  

  const countsArray = Object.entries(bloodTypes);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blood Type Counts</Text>
      {countsArray.map(([bloodType, count], index) => (
        <View key={index} style={styles.countContainer}>
          <Text style={styles.bloodType}>{bloodType}</Text>
          <Text style={styles.count}>{count}</Text>
        </View>
      ))}
      <View style={styles.requiredContainer}>
        <Text style={styles.requiredTitle}>Required Blood Types</Text>
        {Object.entries(requiredTypes).map(([bloodType, count], index) => (
          <View key={index} style={styles.requiredCountContainer}>
            <Text style={styles.requiredBloodType}>{bloodType}</Text>
            <Text style={styles.requiredCount}>{count}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    paddingBottom: 10,
  },
  bloodType: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  count: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666666',
  },
  requiredContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#d9d9d9',
    paddingTop: 20,
  },
  requiredTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  requiredCountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    paddingBottom: 10,
  },
  requiredBloodType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff4d4f',
  },
  requiredCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#c20000',
  },
});





