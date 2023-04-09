import { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { ImageBackground } from "react-native-web";
import CustomButton from "../components/CustomButton";
import Login from "./Logins/Login";
import SignUp from './Logins/SignUp'
// import { Dimensions } from 'react-native';

// const screenWidth = Dimensions.get('window').width;
// const screenHeight = Dimensions.get('window').height;

export default function LoginHome(){

    const [loginVisibility,setLoginVisibility] =useState(false)
    const [signupVisibility,setSignupVisibility] =useState(false)

    function handleLogin(){
        setLoginVisibility(!loginVisibility)
    }
    function handleSignup(){
        setSignupVisibility(!signupVisibility)
    }

    return(
        <View style={styles.outerviewContainer}>
        <ScrollView>
            <View style={styles.scrollStyle}>
            <ImageBackground style={styles.imageStyle} source={require('../assets/images/imgLifeConnect.png')} />
            <View style={styles.innerViewContainer}>
                <Text style={styles.headerText}> Life Connect </Text>
                <CustomButton onPress={handleLogin} title={"Login"} />
                <Login modalVisibility={loginVisibility} goBack={handleLogin} />
                <CustomButton onPress={handleSignup} title={"Sign Up"} />
                <SignUp modalVisibility={signupVisibility} goBack={handleSignup} />
            </View>
            </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    outerviewContainer: {
        // margin: 10,
        // padding: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
        // flexDirection: 'column',
        flex: 1,
        // borderWidth: 2,
        backgroundColor: '#6a0094d0',
    },
    scrollStyle: {
        alignItems: 'center',
    },

    innerViewContainer: {
        margin: 10,
        padding: 10,
    },
    headerText: {
        fontSize: 27,
        padding: 5,
        color: '#ffffff',
        // marginHorizontal: 40,
        // marginLeft: 90,
    },
    imageStyle: {
        // flex: 1,
        // resizeMode: "cover",
        // justifyContent: "center",
        margin: 10,
        padding: 10,
        width: 100,
        height: 150,
        // resizeMode: "cover"
    }
})

