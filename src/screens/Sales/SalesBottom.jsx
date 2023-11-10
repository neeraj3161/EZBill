import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import HorizontalLine from '../../utils/Common/HorizontalLine'

const SalesBottom = () => {
  return (
    <View style={styles.bottomContainer}>
        <View style={styles.mainContainer}>
            <TouchableOpacity>
            <View style={styles.btnCard}>
                <Text style={styles.btnTxt}>Bulk Edit</Text>
            </View>
            </TouchableOpacity>
            

            <TouchableOpacity>
            <View style={styles.btnCard}>
                <Text style={styles.btnTxt}>Add Info</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.btnCard}>
                <Text style={styles.btnTxt}>Save</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.btnCard}>
                <Text style={styles.btnTxt}>Print</Text>
            </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default SalesBottom

const styles = StyleSheet.create({
    bottomContainer:
    {
        width:'100%',
        height:50,
        backgroundColor:'#525FE1',
        position:'absolute',
        bottom:120,
        zIndex:10,
        alignItems:'center',
        justifyContent:'center'
    },
    mainContainer:{
        justifyContent:'space-around',
        flexDirection:'row',
        gap:10
    },

    btnCard:{
        width:80,
        height:25,
        borderWidth:1,
        borderColor:'#ffffff',
        borderRadius:5,
        
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        
        justifyContent:'center',
        alignItems:'center'

    },
    btnTxt:{
        color:'#ffffff',
    }
})