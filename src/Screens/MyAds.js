import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { onValue, ref, set } from "firebase/database";

const MyAds = () => {
  const{Smallcontainer}=styles

  function readData(){
    const starCountRef = ref(db, 'UserAd/' + postId);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      mydataLocationSetSelected(data.mydataLocationselected)
    });

  }
  return (
    <View>
      <Text>MyAds</Text>
      <View style={Smallcontainer}>
          <Text style={{fontSize:15, marginLeft:20}}>Assembly Type</Text>
          
          {readData}
        </View>
    </View>
  )
}

export default MyAds

const styles = StyleSheet.create({

  Smallcontainer:{
    marginTop:10,
    width:'100%',
    height:100,
    backgroundColor:'pink',
    borderRadius:10
  },
})