import { Feather } from "@expo/vector-icons";
import React from "react";
import {Text,View,StyleSheet,SafeAreaView, TextInput, Button, Pressable,backgroundColor} from 'react-native'


const Home=({navigation})=>{
    const{container,searchbartextstyle,buttonstyle,Textstyle}=styles
    return(
        <SafeAreaView style={{backgroundColor:"#333",flex:1}}>
            <View>
                <Text style={{textAlign:'center', fontSize:20,color:'#FF0004'}}>DRIVE- Pakistan's Own Buy and Sell App</Text>
            </View>
                <View style={container}>
                    <Button style={buttonstyle}
                    title="Used Cars"  onPress={()=>navigation.navigate('NewCarsPage')}/>

                    <Button style={buttonstyle}
                    title="New Cars"  onPress={()=>navigation.navigate('NewCarsPage')}/>

                    <Button style={buttonstyle}
                    title="Bikes"  onPress={()=>navigation.navigate('NewCarsPage')}/>

                    <Button style={buttonstyle}
                    title="AutoStore"  onPress={()=>navigation.navigate('NewCarsPage')}/>

                </View>

                <Pressable 
                    style={{padding:10,flexDirection:'row', width:"98%",backgroundColor:"#D3D7D5",borderRadius:10,alignItems:"center"}}
                    onPress={()=>navigation.navigate('SearchPage')}>
                    <Feather name="search" size={20} color="grey" style={{marginLeft:1, marginRight:4}}/>
                    <Text style={searchbartextstyle}>Search Used Cars</Text>
                </Pressable>
            
             <View>
                <Text style={Textstyle}> Browse Used Cars</Text>
                
             </View>
            
        </SafeAreaView>
       
    )
}

const styles=StyleSheet.create({
    container:{
        paddingTop:25,
        padding:10,
        flexDirection:'row',
        width:"100%",
        backgroundcolor:"grey",
        alignItems:"flex-start",
        justifyContent:'space-evenly'
    },
    searchbartextstyle:{
        fontSize:15,
        color:"grey"
    },
    buttonstyle:{
        borderRadius:50
    },
    Textstyle:{
        padding:40,
        color:"white",
        fontSize:15
    }
    
})
export default Home