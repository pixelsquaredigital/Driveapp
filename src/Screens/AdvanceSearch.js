import { StyleSheet, Text, View,TouchableOpacity, Alert, Button, TextInput, ScrollView} from 'react-native'
import React from 'react'
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list'
import { Feather } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
const AdvanceSearch = () => {
  const [mydataselected,mydatasetSelected] =React.useState("");
  const mydata =[
    {key:'Islamabad',value:'Islamabad'},
    {key:'Lahore',value:'Lahore'},
    {key:'Karachi',value:'Karachi'},
    {key:'Peshawar',value:'Peshawar'}

  ]

  const [carmodelselected,mycarmodelSetSelected]=React.useState("");
  const CarmodelData=[
    {key:'Corolla',value:'Corolla'},
    {key:'Civic',value:'Civic'},
    {key:'City',value:'City'},
    {key:'Mehran',value:'Mehran'}

  ]
  
  const [RegisteredInselected,RegisteredInSetSelected] =React.useState("");
  const RegisteredIndata =[
    {key:'Islamabad',value:'Islamabad'},
    {key:'Lahore',value:'Lahore'},
    {key:'Karachi',value:'Karachi'},
    {key:'Peshawar',value:'Peshawar'}

  ]

  const[TransmissionType,setTransmissionType]=React.useState('');
  const TransmissionTypedata =[
    {key:'Automatic',value:'automatic'},
    {key:'Manual',value:'manual'}

  ]

  const [FuelTypeselected,FuelTypeSetSelected] =React.useState("");
  const FuelTypedata =[
    {key:'Petrol',value:'Petrol'},
    {key:'Cng',value:'Cng'},
    {key:'Diesel',value:'Diesel'},
    {key:'LPG',value:'LPG'},
    {key:'Electric',value:'Electric'},
    {key:'Hybrid',value:'Hybrid'}

  ]

  const[AssemblyTypeselected,AssemblyTypeSetSelected]=React.useState('');
  const AssemblyTypedata =[
    {key:'Local',value:'Local'},
    {key:'Imported',value:'Imported'}

  ]

  const{textstyle,multiplemenustyle,touchableopacitystyle,content,contentcontainer,container,applybar,Smallcontainer,Colorstyle,bluebg,whitebg,greybg,silverbg,goldbg,maroonbg}=styles
  const[MinPrice,setMinPrice]=React.useState('');
  const[MaxPrice,setMaxPrice]=React.useState('');
  const[MinYear,setMinYear]=React.useState('');
  const[MaxYear,setMaxYear]=React.useState('');
  const[MinMileage,setMinMileage]=React.useState('');
  const[MaxMileage,setMaxMileage]=React.useState('');
  
  return (
    <ScrollView>
      <Text style={textstyle}>Refine Your Search</Text>
      <Text > </Text>
      
      <Text style={{color:'#022449', fontSize:20}}>  <Entypo name="location-pin" size={20} color="#022449" />   Location </Text>
      <SelectList 
      data={mydata} setSelected={mydatasetSelected}

      placeholder='Select Location'
      />
      <Text > </Text>
      <Text style={{color:'#022449', fontSize:20}}>  <FontAwesome5 name="car" size={20} color="#022449" />   Car Model </Text>
      <MultipleSelectList
      placeholder='Select Car Model'
      style={multiplemenustyle}
      data={CarmodelData}
      setSelected={(val)=>mycarmodelSetSelected(val)}
      save="value"
      label='CarModel'
      />
      <Text > </Text>
      <Text style={{color:'#022449', fontSize:20}}>  <Entypo name="location-pin" size={20} color="#022449" /> Vehicle Registration Location </Text>
      <SelectList 
      data={RegisteredIndata} setSelected={RegisteredInSetSelected}

      placeholder='Vehicle Registration Location'
      
      />

      <View style={{flex: 1, flexDirection: 'row'}}>
      {/* <RangeSlider
      minValue={0}
      MaxValue={300000000}
      tintColor={'#022449'}
      handleBorderWidth={1}
      handleBorderColor='#454d55'
      selectedMinimum={20}
      selectedmaximum={40}
      style={{ flex: 1, height: 70, padding: 10, backgroundColor: '#ddd' }}
      onChange={ (data)=>{ console.log(data);} }
      /> */}

      </View>
      
        {/* Price Container */}
        <View style={contentcontainer}>
            <View style={content}>
            <Text style={{fontSize:20, color:'black'}}>Price (PKR)</Text>
            
            <View style={{flexDirection:'column', justifyContent:'space-between'}}>
                <View style={{marginTop:5}}>
                    <Text>Min Price: {MinPrice}</Text>
                    <View style={{borderColor:'##BECF2', borderWidth:1, padding:10, marginTop:5,borderRadius:5}}>
                        <TextInput value={MinPrice} onChangeText={setMinPrice} placeholder='0' keyboardType='numeric'/>
                    </View>
                </View>
                <View>
                    <Text>Max Price: {MaxPrice}</Text>
                    <View style={{borderColor:'##BECF2', borderWidth:1, padding:10, marginTop:5,borderRadius:5}}>
                    <TextInput value={MaxPrice} onChangeText={setMaxPrice} placeholder='0' keyboardType='numeric'/>
                    </View>
                </View>
            </View>
            </View>
        
        </View>
      
      {/* Model Year Container */}
        <View style={contentcontainer}>
            <View style={content}>
            <Text style={{fontSize:20, color:'black'}}>Model (Year)</Text>
            
            <View style={{flexDirection:'column', justifyContent:'space-between'}}>
                <View style={{marginTop:5}}>
                    <Text>Min Year: {MinYear}</Text>
                    <View style={{borderColor:'##BECF2', borderWidth:1, padding:10, marginTop:5,borderRadius:5}}>
                        <TextInput value={MinYear} onChangeText={setMinYear} placeholder='0' keyboardType='numeric'/>
                    </View>
                </View>
                <View>
                    <Text>Max Year: {MaxYear}</Text>
                    <View style={{borderColor:'##BECF2', borderWidth:1, padding:10, marginTop:5,borderRadius:5}}>
                    <TextInput value={MaxYear} onChangeText={setMaxYear} placeholder='0' keyboardType='numeric'/>
                    </View>
                </View>
            </View>
            </View>
        
        </View>

          {/* Mileage Container */}
        <View style={contentcontainer}>
            <View style={content}>
            <Text style={{fontSize:20, color:'black'}}>Mileage</Text>
            
            <View style={{flexDirection:'column', justifyContent:'space-between'}}>
                <View style={{marginTop:5}}>
                    <Text>Min Mileage: {MinMileage}</Text>
                    <View style={{borderColor:'##BECF2', borderWidth:1, padding:10, marginTop:5,borderRadius:5}}>
                        <TextInput value={MinMileage} onChangeText={setMinMileage} placeholder='0' keyboardType='numeric'/>
                    </View>
                </View>
                <View>
                    <Text>Max Mileage: {MaxMileage}</Text>
                    <View style={{borderColor:'##BECF2', borderWidth:1, padding:10, marginTop:5,borderRadius:5}}>
                    <TextInput value={MaxMileage} onChangeText={setMaxMileage} placeholder='0' keyboardType='numeric'/>
                    </View>
                </View>
            </View>
            </View>
        
        </View>
      
      {/* Transmission type Container */}
        <View style={Smallcontainer}>
          <Text style={{fontSize:15, marginLeft:20}}>Transmission Type</Text>
          <SelectList 
            data={TransmissionTypedata} setSelected={setTransmissionType}
            placeholder='Select Transmission'
          />
          
        </View>

        {/* fuel type Container */}
        <View style={Smallcontainer}>
          <Text style={{fontSize:15, marginLeft:20}}>Fuel Type</Text>
          <SelectList 
            data={FuelTypedata} setSelected={FuelTypeSetSelected}
            placeholder='Select Fuel Type'
          />
          
        </View>

        <View style={Smallcontainer}>
          <Text style={{fontSize:15, marginLeft:20}}>Body Color</Text>
          <ScrollView style={{flexDirection:'row'}} horizontal={true}>
          <TouchableOpacity style={[Colorstyle,bluebg]} 
            onPress={()=> {}}
            >
            <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>blue</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Colorstyle,whitebg]}
            onPress={()=> {}}
            >
            <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}>white</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Colorstyle,silverbg]}
            onPress={()=> {}}
            >
            <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}>silver</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Colorstyle,greybg]}
            onPress={()=> {}}
            >
            <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>grey</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Colorstyle,goldbg]}
            onPress={()=> {}}
            >
            <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>gold</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Colorstyle,maroonbg]}
            onPress={()=> {}}
            >
            <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>maroon</Text>
            </TouchableOpacity>

          </ScrollView>
            
          
        </View>

        {/* Assembly type Container */}
        <View style={Smallcontainer}>
          <Text style={{fontSize:15, marginLeft:20}}>Assembly Type</Text>
          <SelectList 
            data={AssemblyTypedata} setSelected={AssemblyTypeSetSelected}
            placeholder='Select Fuel Type'
          />
          
        </View>

      <View style={{marginTop:80,flexDirection:'row',justifyContent:'center'}}>
      <TouchableOpacity style={{
        backgroundColor: 'white',
        width:100,
        borderRadius:5,
        borderWidth:1,
        marginLeft:20,
        height:40}}>
          <Text style={{fontSize:18,marginLeft:20,color:'black',marginTop:6}}>Reset</Text>
          </TouchableOpacity>

        <TouchableOpacity style={{
        backgroundColor: '#004DCF',
        width:120,
        borderRadius:5,
        marginLeft:25,
        height:40}} 
        
        onPress={()=> Alert.alert(`you selected\n carmodel: ${carmodelselected}\n Location: ${mydataselected}`,)}
        >
          <Text style={{fontSize:15,marginLeft:25,color:'white',marginTop:8}}>Apply Filters</Text>
        </TouchableOpacity>
      
     
      </View>
      
      
    </ScrollView>
  )
}

export default AdvanceSearch

const styles = StyleSheet.create({
  textstyle:{
    paddingTop:10,
    fontSize:20,
    alignSelf:'center'
  },
  multiplemenustyle:{
    flexDirection:'row',
    padding:20,
  },
  touchableopacitystyle:{
    backgroundColor:'blue'
  },
  contentcontainer:{
    marginTop:10,
    width:'100%',
    height:200,
    backgroundColor:'white',
    borderRadius:10
},
Smallcontainer:{
  marginTop:10,
  width:'100%',
  height:100,
  backgroundColor:'white',
  borderRadius:10
},
content:{
    flex:1,
    justifyContent:'space-between',
    padding:16,

},
applybar:{
  padding:10,
  paddingTop:20,
  flexDirection:'row',
  width:"100%",
  justifyContent:'space-evenly',
  backgroundColor:"blue"
},
Colorstyle:{
            borderRadius:70,
            borderWidth:1,
            marginLeft:20,
            width:60,
            height:60,
            marginVertical:5,
            justifyContent:'center',
            alignItems:'center',
            borderColor:'grey'
},
bluebg:{
  backgroundColor: 'blue'
},
whitebg:{
  backgroundColor: 'white'
},
blackbg:{
  backgroundColor: 'black'
},
silverbg:{
  backgroundColor: 'silver'
},
greybg:{
  backgroundColor: 'grey'
},
goldbg:{
  backgroundColor:'gold'
},
maroonbg:{
  backgroundColor:'maroon'
}
})