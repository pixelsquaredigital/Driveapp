import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import Home from '../Screens/Home'
import AdvanceSearch from'../Screens/AdvanceSearch'
import SearchPage from '../Screens/SearchPage'
import NewCarsPage from'../Screens/NewCarsPage'
import MyAds from '../Screens/MyAds'
import Profile from '../Screens/Profile'
import SellNow from '../Screens/SellNow'
import CodeCheck from '../Screens/CodeCheck'

const Tab = createBottomTabNavigator()
const Stack=createNativeStackNavigator();

const MyHome=()=>{
    return(
        <Stack.Navigator> 
        {/* initialRouteName='CurrentWeather' */}
        <Stack.Screen name="Home" component={Home} options={{
            headerShown:false,
        }}/>
        <Stack.Screen name="AdvanceSearch" component={AdvanceSearch}/>
        <Stack.Screen name="NewCarsPage" component={NewCarsPage}/>
        <Stack.Screen name="SearchPage" component={SearchPage} option={{
            headerShown:false
        }}/>
    </Stack.Navigator>
    )
}
const Tabs =()=>{
    return(
        

   

   <Tab.Navigator screenOptions={{
            TabBarActiveTintColor: 'tomato',
            TabBarInactiveTintColor: 'grey',
            tabBarStyle:{
                backgroundColor: '#00BCD4' 
                // this is bottom bar color
            },
            headerStyle:{
                //this is up header 
                backgroundColor:'#0087FF',
                height:40
                
            },
            headerTitleStyle:{
                fontWeight:'bold',
                fontSize:25,
                color:'white',
                height:75

            }
        }}>
            {/* MyHome Is the Above Function made as screen. this is to use stack navigation in tab navigation and access any screen registered in the stack navigator through a button */}
            <Tab.Screen name={'MyHome'} component={MyHome} options={{
                headerShown:false,
                tabBarIcon: ({ focused }) => (
                <Feather name={'home'} size={25} color={focused ? 'black' : 'grey'} />
                

                )
            }} />
            <Tab.Screen name={'MyAds'} component={MyAds} options={{
                tabBarIcon:({focused})=> (
                    <Feather name={'layers'} size={25} color={focused? 'black': 'grey'}/>
                )
                }}
             />

            <Tab.Screen name={'CodeCheck'} component={CodeCheck} options={{
                tabBarIcon:({focused})=> (
                    <Feather name={'plus-circle'} size={25} color={focused? 'black': '#FF2500'}/>
                )
                }}
            />

            <Tab.Screen name={'SellNow'} component={SellNow} options={{
                tabBarIcon:({focused})=> (
                    <Feather name={'plus-circle'} size={25} color={focused? 'black': '#FF2500'}/>
                )
                }}
             />

            <Tab.Screen name={'Profile'} component={Profile} options={{
                tabBarIcon:({focused})=> (
                    <Feather name={'menu'} size={25} color={focused? 'black': 'grey'}/>
                )
                }}
             />

           
        </Tab.Navigator>
       
    )
}

export default Tabs