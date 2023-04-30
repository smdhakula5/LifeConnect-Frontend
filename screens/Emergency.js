import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function BloodTypeList(props) {
  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const onBloodTypePress = (type) => {
    // Do something when a blood type button is pressed
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


