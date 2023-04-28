import { useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity, ImageBackground, ScrollView, LogBox } from "react-native";
import CustomButton from "../components/CustomButton";
// import AsyncStorage from '@react-native-async-storage/async-storage';


LogBox.ignoreLogs(["ViewPropTypes will be removed from React Native"]);

export default function LoginHome(props){

    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     async function checkLoggedIn(){
    //         const username = await AsyncStorage.getItem('username');
    //         if(username !== null){
    //             setIsLoggedIn(true);
    //             props.navigation.navigate('Dashboard');
    //         }
    //     }
    //     checkLoggedIn();
    // }, []);

    function handleLogin(){
        props.navigation.navigate('Login')
    }
    function handleSignup(){
        props.navigation.navigate('SignUp')
    }

    return(
        <View style={styles.outerviewContainer}>
            <ImageBackground source={require('../assets/images/LifeConnect.png')} style={styles.imageStyle}>
        <ScrollView>
            <View style={styles.scrollStyle}>
            {/* <Image style={styles.imageStyle} source={require('../assets/images/imgLifeConnect.png')} /> */}
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
        </ImageBackground>
        </View>
    )
}

// const styles = StyleSheet.create({
//     outerviewContainer: {
//         // margin: 10,
//         // padding: 10,
//         // justifyContent: 'center',
//         // alignItems: 'center',
//         // flexDirection: 'column',
//         flex: 1,
//         // borderWidth: 2,
//         backgroundColor: '#6a0094d0',
//     },
//     scrollStyle: {
//         alignItems: 'center',
//     },

//     innerViewContainer: {
//         margin: 10,
//         padding: 10,
//     },
//     headerText: {
//         fontSize: 27,
//         padding: 5,
//         color: '#ffffff',
//         // marginHorizontal: 40,
//         // marginLeft: 90,
//     },
//     imageStyle: {
//         // flex: 1,
//         // resizeMode: "cover",
//         // justifyContent: "center",
//         margin: 10,
//         padding: 10,
//         width: 100,
//         height: 150,
//         // resizeMode: "cover"
//     }
// })

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

