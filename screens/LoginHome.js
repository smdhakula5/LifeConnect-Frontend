
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView, LogBox, TouchableOpacity } from "react-native";
import CustomButton from "../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";



LogBox.ignoreLogs(["ViewPropTypes will be removed from React Native"]);

export default function LoginHome(props){

    function handleLogin(){
        props.navigation.navigate('Login')
    }
    function handleSignup(){
        props.navigation.navigate('SignUp')
    }

    return(
        <ImageBackground source={require('../assets/images/LifeConnect.png')} style={styles.imageStyle}>
            <View style={styles.outerviewContainer}>
                <ScrollView>
                    <View style={styles.scrollStyle}>
                        <View style={styles.innerViewContainer}>
                            <Text style={styles.headerText}> Life Connect </Text>
                            <TouchableOpacity style={styles.buttonStyle} onPress={handleLogin}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: '#2196f3', borderWidth: 1}]} onPress={handleSignup}>
                                <Text style={[styles.buttonText, {color: "#ffffff"}]}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    outerviewContainer: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    scrollStyle: {
        alignItems: 'center',
    },
    innerViewContainer: {
        margin: 10,
        padding: 10,
        alignItems: "center"
    },
    headerText: {
        fontSize: 27,
        padding: 5,
        color: '#ffffff',
    },
    buttonStyle: {
        padding: 10,
        marginVertical: 10,
        width: "100%",
        borderRadius: 5,
        backgroundColor: '#2196f3',
        alignItems: "center"
    },
    buttonText: {
        fontSize: 20,
        color: "#ffffff"
    }
})






