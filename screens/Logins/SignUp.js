import { useState } from "react";
import { View, Text, StyleSheet, Modal, TextInput, Alert, ScrollView } from "react-native";
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
        <Modal visible={props.modalVisibility} animationType='fade'>
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
            <Text style={styles.textStyle}> Permanent Address </Text>
            <TextInput multiline style={styles.textInputStyle} numberOfLines={4} />
            <Text style={styles.textStyle}> Phone Number </Text>
            <TextInput style={styles.textInputStyle} placeholder="Enter phone number here" placeholderTextColor={'#888888'} onChangeText={phoneNumberChanged} />
            <Text style={styles.textStyle}> Username </Text>
            <TextInput placeholder="Enter username here" placeholderTextColor={'#888888'} style={styles.textInputStyle} onChangeText={usernameChanged} />
            <Text style={styles.textStyle}> Password </Text>
            <TextInput placeholder="Enter password here" placeholderTextColor={'#888888'} style={styles.textInputStyle} secureTextEntry={true} onChangeText={passwordChanged} />
            </View>
            <CustomButton title='Sign Up' />
            <CustomButton title='Go Back' onPress={props.goBack}/>
        </ScrollView>
        </View>
        </Modal>
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

// Name
// Blood Group
// Permanent Address
// Phone No.
// Username
// Password