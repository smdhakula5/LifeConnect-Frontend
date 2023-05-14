import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";


export default function CustomButton(props)
{

    return(
        <View style={styles.viewContainer}>
            <TouchableOpacity onPress={props.onPress} style={styles.touchableStyle}>
                <Text style={{color: '#ffffff'}}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
        padding: 10,
        // borderWidth: 2,
        backgroundColor: '#2196f3',
    },
    
    touchableStyle: {
    }
})