import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import HorizontalLine from '../../utils/Common/HorizontalLine'

const SalesBottom = () => {
  return (
    <>

    <View style={styles.transactionDetails}>
        <Text style={styles.transactionTxtTotal}>Total: 0.0</Text>
        <TouchableOpacity>
        <View style={styles.transactionTypeCard}>
       
        <Text style={styles.transactionTypeTxt}>Cash</Text>
       
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.transactionTypeCard}>
       
        <Text style={styles.transactionTypeTxt}>UPI</Text>
       
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.transactionTypeCard}>
       
        <Text style={styles.transactionTypeTxt}>Cheque</Text>
       
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.resetBtnCard}>
       
        <Text style={styles.resetBtn}>Reset</Text>
       
        </View>
        </TouchableOpacity>

        
    </View>

    <View style={styles.bottomContainer}>
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
    </>
  )
}

export default SalesBottom

const styles = StyleSheet.create({
    resetBtnCard:{
        height:25,
        width:55,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#525FE1',
        marginHorizontal:10
    },

    resetBtn:{
        color:'#f8f8f8'
    },
    transactionTypeTxt:{
        color:'#525FE1'
    },
    transactionTypeCard:{
        height:22,
        width:55,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#525FE1',
        marginHorizontal:10
    },
    transactionDetails:{
        height:40,
        width:'100%',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    bottomContainer:
    {
        width:'100%',
        height:50,
        backgroundColor:'#525FE1',
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row'
    },
    mainContainer:{
        justifyContent:'space-around',
        flexDirection:'row'
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