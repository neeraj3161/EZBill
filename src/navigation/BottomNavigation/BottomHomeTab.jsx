import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const BottomHomeTab = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                    <Image source={require("../../assets/icons/home.png")} resizeMode='contain' style={{width:25, height:25, tintColor: '#748c94'}}/>
                    <Text style={{color: '#e32f45' , fontSize:12}}>Home</Text>
                </View>
    </View>
  )
}

export default BottomHomeTab

const styles = StyleSheet.create({
    mainContainer:{
        position:'absolute',
            elevation:0,
            backgroundColor:'#ffffff',
            borderTopEndRadius:15,
            borderTopLeftRadius:15,
            zIndex:0,
            bottom:0,
            justifyContent:'center',
            alignItems:'center',
            bottom:90
    }
})