// import { StyleSheet, Text, View,TextInput,TouchableOpacity,Keyboard, Alert } from 'react-native'
// import React,{useState} from 'react'
// import { firebase } from '../config'

// const Add = () => {
//     const todoRef=firebase.firestore().collection('newData');
//     const [addData, setAddData]=useState('');
  
//     const AddField=()=>{
//         if(addData && addData.length>0){
//             const timestamp=firebase.firestore.FieldValue.serverTimestamp();
//             const data={
//                 heading:addData,
//                 CreatedAt : timestamp
//             };
//             todoRef.add(data).then(()=>{
//                 setAddData('');
//                 Keyboard.dismiss();
//             })
//             .catch((error)=>{
//                 Alert.alert(error);
//             })
//         }
//     }

//     return(
//         <View style={{flex:1,justifyContent:'center'}}>
//             <View style={styles.formContainer}>
//                 <TextInput
//                     style={styles.input}
//                     placeholder='add some text'
//                     placeholderTextColor={'#aaaaaa'}
//                     onChangeText={(heading)=>setAddData(heading)}
//                     value={addData}
//                     multiline={true}
//                     underlineColorAndroid={'transparent'}
//                     autoCapitalize='none'
//                 />
//                 <TouchableOpacity style={styles.button} onpress={AddField}>
//                     <Text style={styles.buttonText}>Add</Text>

//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// }

// export default Add

// const styles = StyleSheet.create({
//     formContainer:{
//         flexDirection:'row',
//         height:80,
//         marginLeft:10,
//         marginRight:10,
//     },
//     input:{
//         height:48,
//         borderRadius:5,
//         overflow:'hidden',
//         backgroundColor:'white',
//         paddingLeft:16,
//         flex:1,
//         marginRight:5
//     },
//     button:{
//         height:47,
//         borderRadius:5,
//         backgroundColor:'#788eec',
//         width:80,
//         alignItems:'center',
//         justifyContent:'center'
//     },
//     buttonText:{
//         color:'white',
//         fontSize:20
//     }

// })