import { StyleSheet, Text, View, TouchableOpacity, Image , TextInput,ScrollView, Dimensions} from 'react-native'
import React from 'react'
import SalesItemsCardList from './SalesItemsCardList';
import SalesBottom from './SalesBottom';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SalesDashboard = () => {

    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');


  return (
    <View style={{backgroundColor:'white'}}>
        <View style={styles.salesDashContainer}>

<TextInput
 style={styles.input}
 onChangeText={onChangeNumber}
 value={number}
 placeholder="Quick Search item"
 keyboardType="ascii-capable"
 inlineImageLeft='search.png'
/>
<TouchableOpacity><Image  source={require('../../assets/icons/sort.png')} style={styles.sortImg}/></TouchableOpacity>

</View>


    <SalesItemsCardList text={number}/>
    </View>

  )
}

export default SalesDashboard

const styles = StyleSheet.create({

    dashTxt:{
        color:'#525FE1',
        padding:10,
        fontWeight:'400'
    },

    sortImg:{
        tintColor:'#525FE1',
        padding:10,
        marginLeft:20,
        marginRight:20
    },

    salesDashContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        paddingLeft:15,
        flexGrow:2,
        borderRadius:8,
        borderColor:'#D0D4CA',
        
      },
})