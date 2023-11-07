import { StyleSheet, Text, View , ScrollView} from 'react-native'
import React from 'react'
import HorizontalLine from '../../utils/Common/HorizontalLine'
import CardView from '../../utils/Common/CardView'

const SalesReport = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.heading}>Sales Report <Text style={styles.txtSmall}>(Monthly)</Text></Text>
        <HorizontalLine/>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection:'row'}}>
        <CardView borderLeftColor="green" text="Profits" color="green" amountTxt={'Rs. 500'}/>
        <CardView borderLeftColor="green" text="Pay IN" color="green" amountTxt={0}/>
        <CardView borderLeftColor="red" text="Pay OUT" color="tomato" amountTxt={588}/>
        <CardView borderLeftColor="red" text="Reorder (Low Stock)" color="tomato" amountTxt={20}/>
          
        </ScrollView>
      </View>
    </View>
  )
}

export default SalesReport

const styles = StyleSheet.create({

    container:{
        padding:10,
    },
    heading:{
        marginBottom:0,
        fontSize:20,
        fontWeight:'500',
        color:'#525FE1',
        
        fontFamily:'sans'
    
    },

    txtSmall:{
        marginLeft:10,
        fontSize:15,
        fontWeight:'500',
        color:'#39A7FF',
    },
    card:{
        width:150,
        height:120,
        backgroundColor:'#fff',
        shadowOpacity:0.25,
        shadowRadius:3.5,
        borderRadius:10,
        marginRight:20,
        justifyContent:'center',
        alignItems:'center',
        borderLeftWidth:1,
        borderLeftColor:'green'
    },

    
})