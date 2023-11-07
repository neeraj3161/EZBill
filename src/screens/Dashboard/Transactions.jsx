import { StyleSheet, Text, View , ScrollView} from 'react-native'
import React from 'react'
import HorizontalLine from '../../utils/Common/HorizontalLine'
import CardView from '../../utils/Common/CardView'

const Transactions = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.heading}>Transactions <Text style={styles.txtSmall}>(Today)</Text></Text>
        <HorizontalLine/>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection:'row'}}>
        <CardView borderLeftColor="green" text="Money IN" color="green" amountTxt={500}/>
        <CardView borderLeftColor="red" text="Money OUT" color="tomato" amountTxt={0}/>
        <CardView borderLeftColor="green" text="UPI IN" color="green" amountTxt={588}/>
        <CardView borderLeftColor="red" text="UPI OUT" color="tomato" amountTxt={20}/>
        <CardView borderLeftColor="green" text="Cash IN" color="green" amountTxt={5600}/>
        <CardView borderLeftColor="green" text="Cheque IN" color="green" amountTxt={100}/>
        <CardView borderLeftColor="red" text="Cheque OUT" color="tomato" amountTxt={600}/>
          
        </ScrollView>
      </View>
    </View>
  )
}

export default Transactions

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
        marginTop:20,
        marginRight:20,
        justifyContent:'center',
        alignItems:'center',
        borderLeftWidth:1,
        borderLeftColor:'green'
    },

    
})