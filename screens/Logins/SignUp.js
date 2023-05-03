
//AIzaSyD_TW6eYj_vZurwo78v3L0c-VP2Q84KNTc



import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  Alert,
  ScrollView,
  LogBox,
  FlatList,
  SectionList
} from "react-native";
import CheckBox from "react-native-check-box";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Dropdown } from "react-native-element-dropdown";
import CustomButton from "../../components/CustomButton";
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

import PasswordValidator from "password-validator";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function SignUp(props) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [username, setUsername] = useState("");
    const [isValid, setStatus] = useState(false);
    const [bloodGroup, setBloodGroup] = useState("");
    const [bloodGroupType, setBloodGroupType] = useState("");
  const [address, setAddress] = useState(null)
  const [userType, setUserType] = useState(false)

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

function addressHandler(data, details) {
  setAddress(details.formatted_address);
}



function passwordChanged(input) {
    setPassword(input);
    // if(schema.validate(password)){
        //   setStatus(true);
        // }
        // console.log(password)
    }
    
    async function handleSignup(){
        //API for hitting server and getting response
        const details = {
          userName:username,
          password:password,
          name:name,
          phoneNumber:phoneNo,
          bloodGroup:bloodGroup.label+bloodGroupType.label,
          location:address.description,

        }
        console.log(details);
        if(schema.validate(password)){
          try {
            const response = await fetch("http://192.168.29.123:3000/users/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(details),
            });
      
            const data = await response.json();
      
            if (data.status === true) {
              //Also set the type of user after getting response
              await AsyncStorage.setItem("username", username);
              await AsyncStorage.setItem("userType",data.userType);
              data.userType=="donor"?props.navigation.navigate("Dashboard"):props.navigation.navigate("ReceiverDashboard");
            } else {
              console.log(details);
            }
          } catch (error) {
            console.error(error);
          }

            // props.navigation.navigate('Dashboard');
        }
        else{
            props.navigation.navigate('SignUp');
        }
    }

return (
  <ScrollView keyboardShouldPersistTaps="handled">
    <View style={styles.viewContainer}>
      <Text style={styles.headerStyle}>SIGN UP</Text>
      <View style={styles.detailsViewStyle}>
        <Text style={styles.textStyle}>Name</Text>
        <TextInput
          placeholder="Enter name here"
          placeholderTextColor={"#888888"}
          style={styles.textInputStyle}
          onChangeText={nameChanged}
          fontWeight={"bold"}
        />
        <CheckBox
          style={{ marginVertical: 10, padding: 9 }}
          rightTextStyle={{ color: "black" }}
          checkBoxColor="black"
          checkedCheckBoxColor="#24d2e9"
          onClick={() => {
            setUserType(!userType);
          }}
          isChecked={userType}
          rightText={"I am a donor"}
        />
        {userType && (
          <View>
            <Text style={styles.textStyle}>Blood Group</Text>
            <View style={styles.bloodViewStyle}>
              <Dropdown
                style={styles.dropDownStyle}
                data={bloodGroups}
                labelField="label"
                valueField={"value"}
                onChange={(value) => {
                  setBloodGroup(value);
                }}
                value={bloodGroup}
              />
              <Dropdown
                style={styles.dropDownStyle}
                data={bloodGroupsType}
                labelField="label"
                valueField={"value"}
                onChange={(value) => setBloodGroupType(value)}
                value={bloodGroupType}
              />
            </View>
          </View>
        )}
        <Text style={[styles.textStyle, { marginVertical: 10 }]}>
          Permanent Address
        </Text>
        <GooglePlacesAutocomplete styles={{marginVertical: 10, padding: 9}} placeholder="Enter address here" placeholderTextColor={'#888888'} style={styles.textInputStyle} minLength={5} onPress={(item,details)=>{setAddress(item); console.log(details)}} query={{key: 'AIzaSyD_TW6eYj_vZurwo78v3L0c-VP2Q84KNTc',language:'en'}} />
      
         {/* <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder='Enter Location'
        fetchDetails={true}
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyD_TW6eYj_vZurwo78v3L0c-VP2Q84KNTc',
          language: 'en',
        }}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
      />
    </View> */}
   
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
        <CustomButton
          style={styles.signupButton}
          title={"SIGN UP"}
          onPress={handleSignup}
        />
        <CustomButton
          title="Go Back"
          onPress={props.navigation.goBack}
          backgroundColor={"#2C2C2C"}
          textColor={"#FFFFFF"}
          />
      </View>
    </View>
  </ScrollView>
)};

const styles = StyleSheet.create({
    viewContainer: {
      flexGrow: 1,
      backgroundColor: "#f5f5f5",
      paddingVertical: 40,
      paddingHorizontal: 20,
      alignItems: "center",
    },
    headerStyle: {
      fontSize: 32,
      fontWeight: "bold",
      marginBottom: 30,
    },
    detailsViewStyle: {
      width: "100%",
      paddingHorizontal: 10,
    },
    textStyle: {
      fontSize: 16,
      fontWeight: "bold",
      marginVertical: 5,
    },
    textInputStyle: {
      height: 50,
      width: "100%",
      borderWidth: 1,
      borderColor: "#888888",
      borderRadius: 10,
      paddingHorizontal: 15,
      fontWeight: "bold",
    },
    bloodViewStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    dropDownStyle: {
      width: "48%",
    },
    signupButton: {
      marginTop: 20,
      backgroundColor: '#2196f3',
      borderWidth: 1,
      borderColor: '#2196f3',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 15,
      alignItems: 'center',
    },
  });

  
  
  
  
  


  


// Name
// Blood Group
// Permanent Address
// Phone No.
// Username
// Password













   
