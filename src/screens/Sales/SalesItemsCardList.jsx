import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SalesItemsCardList = () => {
    const [qty,setQty] = useState(0);

    const updateQty = ()=>{
        setQty(qty+1);
    }
    const restQty = ()=>{
        setQty(0);
    }
  return (
    <View style={styles.itemListMainContainer}>
     <TouchableOpacity activeOpacity={0.9} onPress={updateQty} onLongPress={restQty}>
     <View style={styles.itemCard}>


<View style={styles.imgContainer}>
    <Image source={require('../../assets/Images/salon.jpeg')} resizeMode='cover'/>
    
    </View>
    <View style={styles.detailsContainer}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={styles.amntTxtContainer}>
            <Text style={styles.infoTxt}>x{qty}</Text>
        </View>
        <View style={styles.amntTxtContainer}>
        <Text style={styles.infoTxt}>120</Text>
        </View>
        </View>
        <View style={styles.itemNameContainer}>
        <Text style={styles.itemName}>Head Massage</Text>
        </View>
       
</View>

</View>
     
</TouchableOpacity>

    </View>
  )
}

export default SalesItemsCardList

const styles = StyleSheet.create({
    itemListMainContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
        
    },
    itemCard:{
        width:100,
        height:150,
        backgroundColor:'#FFFFFF',
        borderRadius:18,
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        margin:5,
        marginBottom:15,
        borderWidth:1,
        borderColor:'#D0D4CA',
        overflow:'hidden'

    },

   

    imgContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
        height:'40%',
        overflow:'hidden',
        
    },

    detailsContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    itemName:{
        color:'#000000',
        padding:8,
        paddingBottom:0

    },
    amntTxtContainer:{
        height:20,
        width:40,
        marginTop:8,
        justifyContent:'center',
        alignItems:'center'
    },
    infoTxt:{
        fontSize:14,
        color:'#8D8D8D'
    },
    itemNameContainer:{
        justifyContent:'center',
        alignItems:'center'
    }
})