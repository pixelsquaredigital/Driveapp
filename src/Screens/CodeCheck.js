import { StyleSheet, Text, View,TouchableOpacity,TextInput, Alert } from 'react-native'
import React from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import Feather from '@expo/vector-icons/Feather';
import { child, Database, push, ref,set } from 'firebase/database';
import { db } from '../../config';


 
const CodeCheck = () => {
  const[usernoSelected,usernoSetSelected]=React.useState(0);
  const[CarPriceSelected,CarPriceSetSelected]=React.useState('');
  const [mydataLocationselected,mydataLocationSetSelected] =React.useState("");
  const mydataLocation =[
    {key:'Islamabad',value:'Islamabad'},
    {key:'Lahore',value:'Lahore'},
    {key:'Karachi',value:'Karachi'},
    {key:'Peshawar',value:'Peshawar'}

  ]

  const [mydataCarModelYearSelected,mydataCarModelYearSetSelected] =React.useState("2024");
  
  const mydataCarModelYear =[
    {key:'2024',value:'2024'},
    {key:'2023',value:'2023'}

  ]

  const [mydataCarMakeselected,mydataCarMakeSetSelected] =React.useState("");
  const mydataCarMake ={
    '2024':[
      {key:'Toyota',value:'Toyota'},
      {key:'Honda',value:'Honda'},
      {key:'suzuki',value:'suzuki'},
      {key:'Hyundai',value:'Hyundai'}
    ],
    '2023':[
      {key:'Toyota',value:'Toyota'},
      {key:'Honda',value:'Honda'},
      {key:'suzuki',value:'suzuki'},
      {key:'Hyundai',value:'Hyundai'}
    ]

  }

  const [mydataCarMakeModelselected,mydataCarMakeModelSetSelected] =React.useState("Toyota");
  const mydataCarMakeModel ={
    'Toyota':[
      {key:'Corolla',value:'Corolla'},
      {key:'lexus',value:'lexus'},
      {key:'corona',value:'corona'},
      {key:'Fortuner',value:'Fortuner'}
    ],
    'Honda':[
      {key:'Civic',value:'Civic'},
      {key:'City',value:'City'},
      {key:'Brv',value:'Brv'},
      {key:'Accord',value:'Accord'}
    ],
    'suzuki':[
      {key:'Cultus',value:'Cultus'},
      {key:'Alto',value:'Alto'},
      {key:'Mehran',value:'Mehran'},
      {key:'Every',value:'Every'}
    ],
    'Hyundai':[
      {key:'Elentra',value:'Elentra'},
      {key:'SentaFe',value:'SentaFe'},
      {key:'Santro',value:'Santro'},
      {key:'Shehzore',value:'Shehzore'}
    ]

  }


  
  function create (){
    const newKey=push(child(ref(db),'users')).key
    set(ref(db,'UserAd/'+newKey),{
      userlocation: mydataLocationselected,
      modelyear : mydataCarModelYearSelected,
      carmake: mydataCarMakeselected,
      makemodel:mydataCarMakeModelselected,
      CarPrice:CarPriceSelected
    }).then(()=>{
      alert('data submitted');
    }).catch(()=>{
      alert(error);
      Alert.alert(error);
      console.alert();
    })
   }
   
  const{Smallcontainer}=styles
  return (
    <View >
      <Text style={{textAlign:'center' }}>Sell Your Car (for firebase )</Text>

      <View style={{backgroundColor: '#A3B6C2',height:80,justifyContent:'center'}}>
        <Feather style={{alignSelf:'center'}} name="camera" size={24} color="black" />
        <Text style={{textAlign:'center' }}>Add Photos</Text>
      </View>

      <View style={Smallcontainer}>
        <Text style={{marginLeft:15}}>Car Information</Text>
        <SelectList
          
          data={mydataCarModelYear}
          setSelected={mydataCarModelYearSetSelected}
          placeholder='Add Make Year'
        />

        <SelectList 
          boxStyles={{marginTop:10}}
          data={mydataCarMake[mydataCarModelYearSelected]}
          setSelected={mydataCarMakeSetSelected}
          placeholder='Add Make Company'
        />

        <SelectList
          boxStyles={{marginTop:10}}
          data={mydataCarMakeModel[mydataCarMakeselected]}
          setSelected={mydataCarMakeModelSetSelected}
          placeholder='Add Make Model'
        />

                <View>
                    <Text>Car Price: {CarPriceSelected}</Text>
                    <View style={{borderColor:'##BECF2', borderWidth:1, padding:10, marginTop:5,borderRadius:5}}>
                    <TextInput value={CarPriceSelected} onChangeText={CarPriceSetSelected} placeholder='0' keyboardType='numeric'/>
                    </View>
                </View>
      </View>

      <View>
        {/* <TouchableOpacity style={{
          backgroundColor: '#004DCF',
          width:135,
          borderRadius:10,
          marginLeft:150,
          marginTop:20,
          height:40}} 
        
          // onPress={()=> {create}}
          onClick={create}
          
          >
          <Text style={{fontSize:15,marginLeft:25,color:'white',marginTop:8}}>Post Free Ad</Text>
        </TouchableOpacity> */}

        <button onClick={create} style={{
          backgroundColor: '#004DCF',
          width:135,
          borderRadius:10,
          marginLeft:150,
          marginTop:20,
          height:40}} 
        > 
          <Text style={{fontSize:18,color:'white',marginTop:4}}>Post Free Ad</Text>
        </button>

      </View>
    </View>

      
  )
}

export default CodeCheck

const styles = StyleSheet.create({
  Smallcontainer:{
    marginTop:10,
    width:'100%',
    height:400,
    backgroundColor:'#D5DEDA',
    borderRadius:10,
  },

})