import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated,{useSharedValue,useAnimatedStyle,useAnimatedGestureHandler} from 'react-native-reanimated'

const RangeSlider = () => {
    // const position =useSharedValue(0);
    // const gestureHandler=useAnimatedGestureHandler({
    //     onsStart:(_,ctx)=>{
    //         ctx.startX=position.value;
    //     },
    //     onActive:(e,ctx)=>{
    //         position.value=ctx.startX+e.translationX;
    //     },
    // })
    // const animatedStyle=useAnimatedStyle(()=>({
    //     transform:[{translateX:position.value}]
    // }))
  return (
    <View style={styles.sliderContainer}>
        {/* <View style={styles.SliderBack}/>
        <View style={styles.SliderFront}/>
        {/* <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[styles.thumb, animatedStyle]}>
            <View style={styles.label}>
                <Text style={styles.labelText}> 0</Text>
            </View>
            </Animated.View>
       
        </PanGestureHandler> */}
       
        
        <View style={styles.thumb}>
            <View style={styles.label}>
                <Text style={styles.labelText}> 300000</Text>
            </View>
        </View> */}
      
    </View>
  )
}

export default RangeSlider

const styles = StyleSheet.create({
    sliderContainer:{
        justifyContent:'center',
        alignSelf:'center'
    },
    SliderBack:{
        height:8,
        backgroundColor:'#DFEAFB',
        borderRadius:20,
        width:300
    },
    SliderFront:{
        height:8,
        backgroundColor:'#3F4CF6',
        borderRadius:20,
        width:300,
        position:'absolute'
    },
    thumb:{
        left:-10,
        position:'absolute',
        width:20,
        height:20,
        backgroundColor:'white',
        borderColor:'#3F4CF6',
        borderWidth:5,
        borderRadius:10
    },
    label:{
        position:'absolute',
        top:-40,
        bottom:20,
        backgroundColor:'black',
        borderRadius:5,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    labelText:{
        color:'white',
        padding:5,
        fontWeight:'bold',
        width:'100%',
        fontSize:16

    }
})