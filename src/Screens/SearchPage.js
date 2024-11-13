import { StyleSheet, Text, View,TextInput,Button, SafeAreaView,backgroundcolor, ViewBase } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RangeSlider from '../components/RangeSlider';

const SearchPage = ({navigation}) => {
    const{container,searchbartextstyle,contentcontainer, content}=styles
  return (
    <SafeAreaView style={{backgroundcolor:"black"}}>
       

        <View style={{padding:10,flexDirection:'row', width:"98%",borderRadius:10,alignItems:"center"}}>
            <Feather name="search" size={20} color="grey" style={{marginLeft:1, marginRight:4}}/>
            <TextInput style={searchbartextstyle} placeholder="Search Used Cars"/> 
        </View>

         <View>
            <Button style={{padding:10,flexDirection:'row', width:"98%",borderRadius:10,alignItems:"center"}}
            title="Advance Search"  onPress={()=>navigation.navigate('AdvanceSearch')}/>
        </View>





      

    </SafeAreaView>
    

   
  )
}
const styles=StyleSheet.create({
    
    searchbartextstyle:{
        fontSize:15,
        color:"grey"
    }
    
})
export default SearchPage

