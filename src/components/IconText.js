import React from "react";
import {View, Text, StyleSheet } from 'react-native'
import { Feather } from "@expo/vector-icons";
const IconText =(props)=>{
    const{iconName, iconColor,bodyText,bodtTextStyles}=props
    const{container, textTheme}=styles
    return(
        <View style={container}>
            <Feather name={iconName} size={50} color={iconColor}/>
            <Text style={[textTheme, bodtTextStyles]}>{bodyText}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    textTheme:{
        fontWeight:'bold'
    },
    container:{alignItems:'center'
    }
})

   
export default IconText