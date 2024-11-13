import React,{useState, useEffect} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tabs from './src/components/Tabs'
import { ActivityIndicator, View,StyleSheet } from 'react-native'
import * as Location from 'expo-location'

const Loadingpage = () => {
    const[loading,setLoading]=useState(true)
    const[location,setLocation]=useState(null)
    const[error,setError]=useState(null)

    useEffect(()=>{
        ;(async()=>{
            let {status}=await Location.requestForegroundPermissionAsync()
            if(status!=='granted'){
                setError('permission to access location was denied')
            }
            let location=await Location.getCurrentPositionAsync({})
            setLocation(location)
        })()
    },[])
    if (location){console.log(location)}
    if(loading){
        return(
            <View style={styles.container}>
                <ActivityIndicator size={'large'} color={'blue'}/>
            </View>
        )
    }
  
    return (
       <Tabs/>
    )
}

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:1
    }
})
export default Loadingpage