import { useState } from "react";
import { View, Text, StyleSheet, Modal, TextInput, Alert, ScrollView } from "react-native";
import CustomButton from "../../components/CustomButton";

export default function Login(props){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    // const fetch = require('node-fetch');
    function usernameChanged(input){
        setUsername(input)
        console.log(username)
    }

    function passwordChanged(input){
        setPassword(input)
        console.log(password)
    }

    async function loginPressed(){
        const details = {
            username: username,
            password: password
        }

        props.navigation.navigate('Dashboard')
    }

    return(
            <View style={styles.viewContainer}>
            <ScrollView>
            <Text style={styles.headerStyle}> LOGIN </Text>
            <View style={styles.detailsViewStyle}>
            <Text style={styles.textStyle}> Username </Text>
            <TextInput placeholder="Enter username here" placeholderTextColor={'#888888'} style={styles.textInputStyle} onChangeText={usernameChanged} />
            <Text style={styles.textStyle}> Password </Text>
            <TextInput placeholder="Enter password here" placeholderTextColor={'#888888'} style={styles.textInputStyle} secureTextEntry={true} onChangeText={passwordChanged} />
            </View>
            <CustomButton title='Login' onPress={loginPressed} />
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
        // height: 100,
        backgroundColor: '#743030',
    },
    headerStyle: {
        marginVertical: 30,
        padding: 30,
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
        padding: 5,
        borderWidth: 2,
        borderColor: '#ffffff',
        backgroundColor: 'white',
    }
})