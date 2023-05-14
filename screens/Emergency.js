/*
import React,{useEffect,useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MapMarker from "./MapMarker";

export default function BloodTypeList(props) {
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
  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const onBloodTypePress = async(type) => {
    console.log(type);
    const details={bloodType:type};
    try {
      const response = await fetch(`http://192.168.29.123:3000/${userId}/emergency`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });
      const data = await response.json();
      return <MapMarker markers={data}/>
      console.log(data);
    // Do something when a blood type button is pressed
  }
  catch(error){
    console.log(error);
  }
}

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Blood Types</Text>
      <View style={styles.buttonContainer}>
        {bloodTypes.map((type) => (
          <TouchableOpacity
            key={type}
            style={styles.button}
            onPress={() => onBloodTypePress(type)}
          >
            <Text style={styles.buttonText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#1E272E",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#E74C3C",
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 24,
    margin: 8,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
  },
});

*/

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MapMarker from "./MapMarker";

export default function BloodTypeList(props) {
  const [userId, setUserID] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("username")
      .then((value) => {
        if (value) {
          setUserID(value);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const onBloodTypePress = async (type) => {
    console.log(type);
    const details = { bloodType: type };
    try {
      const response = await fetch(`
      https://shy-fly-crown.cyclic.app/${userId}/emergency`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });
      const data = await response.json();
      props.navigation.navigate('MapMarker', { locations: data });
      setMarkers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Blood Types</Text>
      <View style={styles.buttonContainer}>
        {bloodTypes.map((type) => (
          <TouchableOpacity
            key={type}
            style={styles.button}
            onPress={() => onBloodTypePress(type)}
          >
            <Text style={styles.buttonText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#1E272E",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#E74C3C",
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 24,
    margin: 8,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
  },
});



