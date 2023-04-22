
//AIzaSyD_TW6eYj_vZurwo78v3L0c-VP2Q84KNTc
/*
import { useState } from "react";
import { View, Text, StyleSheet, Modal, TextInput, Alert, ScrollView, } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import CustomButton from "../../components/CustomButton";

export default function Login(props){

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [username, setUsername] = useState("")

    const bloodGroups = [
        {label: 'A', value: '1'},
        {label: 'B', value: '2'},
        {label: 'AB', value: '3'},
        {label: 'O', value: '4'},
    ]

    const bloodGroupsType = [
        {label: '+', value: '1'},
        {label: '-', value: '2'},
    ]

    function nameChanged(input){
        setName(input)
        // console.log(name)
    }

    function usernameChanged(input){
        setUsername(input)
        // console.log(username)
    }

    function phoneNumberChanged(input){
        setPhoneNo(input)
        // console.log(phoneNo)
    }

    function passwordChanged(input){
        setPassword(input)
        // console.log(password)
    }

    return(
        <View style={styles.viewContainer}>
            <ScrollView>
            <Text style={styles.headerStyle}> SIGN UP </Text>
            <View style={styles.detailsViewStyle}>
            <Text style={styles.textStyle}> Name </Text>
            <TextInput placeholder="Enter name here" placeholderTextColor={'#888888'} style={styles.textInputStyle} onChangeText={nameChanged} />
            <Text style={styles.textStyle}> Blood Group </Text>
            <View style={styles.bloodViewStyle}>
                <Dropdown style={styles.dropDownStyle} data={bloodGroups} labelField='label' valueField={'value'} />
                <Dropdown style={styles.dropDownStyle} data={bloodGroupsType} labelField='label' valueField={'value'} />
            </View>
            <Text style={styles.textStyle}> Phone Number </Text>
            <TextInput style={styles.textInputStyle} placeholder="Enter phone number here" placeholderTextColor={'#888888'} onChangeText={phoneNumberChanged} />
            <Text style={styles.textStyle}> Username </Text>
            <TextInput placeholder="Enter username here" placeholderTextColor={'#888888'} style={styles.textInputStyle} onChangeText={usernameChanged} />
            <Text style={styles.textStyle}> Password </Text>
            <TextInput placeholder="Enter password here" placeholderTextColor={'#888888'} style={styles.textInputStyle} secureTextEntry={true} onChangeText={passwordChanged} />
            </View>
            <CustomButton title='Sign Up' />
            <CustomButton title='Go Back' onPress={props.navigation.goBack}/>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        // justifyContent: 'center',
        // alignItems: 'center',
        flex: 1,
        backgroundColor: '#743030',
    },
    headerStyle: {
        marginVertical: 30,
        padding: 12,
        color: '#ffffff',
        fontSize: 30,
    },
    textStyle: {
        fontSize: 17,
        color: '#ffffff',
    },
    detailsViewStyle: {
        margin: 10,
        padding: 10,
    },
    textInputStyle: {
        marginVertical: 10,
        padding: 9,
        borderWidth: 2,
        borderColor: '#ffffff',
        backgroundColor: 'white',
    },
    bloodViewStyle: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',

    },
    dropDownStyle: {
        padding: 3,
        margin: 6,
        color: '#ffffff',
        borderWidth: 2,
        backgroundColor:'#ffffff',
        borderColor: '#aaaaaa',
    }
})

*/




// Name
// Blood Group
// Permanent Address
// Phone No.
// Username
// Password

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import CustomButton from "../../components/CustomButton";
import PasswordValidator from "password-validator";

export default function Login(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [username, setUsername] = useState("");
  const [isValid, setStatus] = useState(false);

  const schema = new PasswordValidator();

  schema
    .is().min(8)
    .is().max(50)
    .has().uppercase()
    .has().lowercase()
    .has().digits()
    .has().symbols()
    .has().not().spaces();

  const bloodGroups = [
    { label: "A", value: "1" },
    { label: "B", value: "2" },
    { label: "AB", value: "3" },
    { label: "O", value: "4" },
  ];

  const bloodGroupsType = [
    { label: "+", value: "1" },
    { label: "-", value: "2" },
  ];

  function nameChanged(input) {
    setName(input);
    // console.log(name)
  }

  function usernameChanged(input) {
    setUsername(input);
    // console.log(username)
  }

  function phoneNumberChanged(input) {
    setPhoneNo(input);
    // console.log(phoneNo)
  }

  function passwordChanged(input) {
    setPassword(input);
    // if(schema.validate(password)){
    //   setStatus(true);
    // }
    // console.log(password)
  }

  function handleSignup(){
    //API for hitting server and getting response
    if(schema.validate(password)){
      props.navigation.navigate('Dashboard');
    }
    else{
      props.navigation.navigate('SignUp');
    }
  }

  return (
    <View style={styles.viewContainer}>
      <ScrollView>
        <Text style={styles.headerStyle}>SIGN UP</Text>
        <View style={styles.detailsViewStyle}>
          <Text style={styles.textStyle}>Name</Text>
          <TextInput
            placeholder="Enter name here"
            placeholderTextColor={"#888888"}
            style={styles.textInputStyle}
            onChangeText={nameChanged}
            fontWeight={'bold'}
          />
          <Text style={styles.textStyle}>Blood Group</Text>
          <View style={styles.bloodViewStyle}>
            <Dropdown
              style={styles.dropDownStyle}
              data={bloodGroups}
              labelField="label"
              valueField={"value"}
            />
            <Dropdown
              style={styles.dropDownStyle}
              data={bloodGroupsType}
              labelField="label"
              valueField={"value"}
            />
          </View>
          <Text style={styles.textStyle}>Phone Number</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter phone number here"
            placeholderTextColor={"#888888"}
            onChangeText={phoneNumberChanged}
            fontWeight={'bold'}
          />
          <Text style={styles.textStyle}>Username</Text>
          <TextInput
            placeholder="Enter username here"
            placeholderTextColor={"#888888"}
            style={styles.textInputStyle}
            onChangeText={usernameChanged}
            fontWeight={'bold'}
          />
          <Text style={styles.textStyle}>Password</Text>
          <TextInput
            placeholder="Enter password here"
            placeholderTextColor={"#888888"}
            style={styles.textInputStyle
            }
            secureTextEntry={true}
            onChangeText={passwordChanged}
            fontWeight={'bold'}
          />
        </View>
        <CustomButton onPress={handleSignup} title="Sign Up" />
        <CustomButton
          title="Go Back"
          onPress={props.navigation.goBack}
          backgroundColor={"#2C2C2C"}
          textColor={"#FFFFFF"}
        />
        </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
viewContainer: {
flexGrow: 1,
backgroundColor: "#f5f5f5",
paddingVertical: 40,
paddingHorizontal: 20,
alignItems: "center",
},
headerStyle: {
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
detailsViewStyle: {
flexGrow: 1,
backgroundColor: "#F9F9F9",
padding: 16,
},
textStyle: {
fontSize: 24,
fontWeight: "bold",
color: "#2C2C2C",
marginBottom: 24,
},
textInputStyle: {
marginBottom: 16,
padding: 12,
borderRadius: 8,
borderWidth: 1,
borderColor: "#BDBDBD",
fontSize: 16,
color: "#2C2C2C",
},
bloodViewStyle: {
flexDirection: "row",
justifyContent: "space-between",
alignItems: "center",
marginBottom: 16,
},
dropDownStyle: {
width: "45%",
},
customButtonContainer: {
marginVertical: 8,
marginHorizontal: 8,
},
customButton: {
backgroundColor: "#2C2C2C",
paddingVertical: 12,
borderRadius: 8,
alignItems: "center",
width: "50%",
},
customButtonText: {
fontSize: 18,
color: "#FFFFFF",
fontWeight: "bold",
},
});




 










   
