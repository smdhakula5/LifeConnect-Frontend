import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function BloodTypeInput(props) {
  const [bloodTypes, setBloodTypes] = useState({
    'A+': 0,
    'A-': 0,
    'B+': 0,
    'B-': 0,
    'AB+': 0,
    'AB-': 0,
    'O+': 0,
    'O-': 0,
  });
  const [userId, setUserID] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('username')
      .then(value => {
        if (value) {
          setUserID(value);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleInputChange = (bloodType, value) => {
    setBloodTypes({
      ...bloodTypes,
      [bloodType]: parseInt(value) || 0,
    });
  };

  const handleSubmit = () => {
    fetch(`http://192.168.29.123:3000/users/${userId}/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bloodTypes: bloodTypes }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Blood Type Counts</Text>
      {Object.keys(bloodTypes).map(bloodType => (
        <View style={styles.inputContainer} key={bloodType}>
          <Text style={styles.inputLabel}>{bloodType}</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => handleInputChange(bloodType, value)}
            value={bloodTypes[bloodType].toString()}
            keyboardType="numeric"
          />
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputLabel: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 8,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#007aff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


