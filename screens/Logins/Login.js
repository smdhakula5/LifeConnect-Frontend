
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Modal, TextInput, Alert, ScrollView} from "react-native";
import CustomButton from "../../components/CustomButton";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChanged = (input) => {
    setUsername(input);
  };

  const passwordChanged = (input) => {
    setPassword(input);
  };

  async function loginPressed() {
    const details = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch("http://192.168.29.123:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });

      const data = await response.json();
      console.log(data);

      if (data.status === true) {
        await AsyncStorage.setItem("username", username);
        await AsyncStorage.setItem("userType",data.userType);
        if(data.userType==="donor"){
          props.navigation.navigate("Dashboard");
        }
        else if(data.userType==="receiver"){
          props.navigation.navigate("ReceiverDashboard");
        }
      } else {
        props.navigation.navigate("LoginHome");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter username here"
          placeholderTextColor="#ccc"
          onChangeText={usernameChanged}
        />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password here"
          placeholderTextColor="#ccc"
          secureTextEntry={true}
          onChangeText={passwordChanged}
        />
      </View>
      <CustomButton title="Login" onPress={loginPressed} style={styles.loginButton} />
      <CustomButton title="Go Back" onPress={props.navigation.goBack} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: '#2196f3',
    borderWidth: 1,
    borderColor: '#2196f3',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 30,
    alignSelf: "flex-start",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
});









