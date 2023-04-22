import { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import CustomButton from "../components/CustomButton";
// import AsyncStorage from '@react-native-async-storage/async-storage';


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
        <ScrollView>
            <View style={styles.scrollStyle}>
            <Image style={styles.imageStyle} source={require('../assets/images/imgLifeConnect.png')} />
            <View style={styles.innerViewContainer}>
                <Text style={styles.headerText}> Life Connect </Text>
                <CustomButton onPress={handleLogin} title={"Login"} />
                <CustomButton onPress={handleSignup} title={"Sign Up"} />
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

