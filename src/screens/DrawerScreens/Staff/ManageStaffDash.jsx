import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    Image,
    Pressable
  } from 'react-native';
import React from 'react'
import InventoryCard from '../../../utils/Common/InventoryCard';
import Colors from '../../../utils/Colors';
import StaffCard from '../../../utils/Common/StaffCard';

const ManageStaffDash = () => {
  return (
    <View style={{marginTop:35}}>
    <ScrollView>
    <StaffCard backgroundColor={'#f8f8f8'} borderLeftColor={Colors.ShadowGrey} name={'All'} description={'Complete staff list'} qty={50} />
    <StaffCard backgroundColor={'#f8f8f8'} borderLeftColor={Colors.mediumGreen} name={'Active'} description={'All active staff list'} qty={10} />

    <StaffCard backgroundColor={'#f8f8f8'} borderLeftColor={Colors.red} name={'Inactive'} description={'All inactive staff list'} qty={10} />

      
    </ScrollView>


      </View>
      
  )
}

export default ManageStaffDash

const styles = StyleSheet.create({
    btnContainer: {
        position: 'absolute',
        top: Dimensions.get('window').height - 150,
        right: 10,
        zIndex: 1,
      },
      txt: {
        color: '#000',
        fontSize: 15,
        letterSpacing: 1,
        marginBottom: 5,
      },
      description: {
        color: '#D7D7D7',
        fontSize: 13,
      },
    
      mainContainer: {
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderLeftWidth:1,
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    
        elevation: 8,
        justifyContent: 'space-around',
      },
    
      txtContainer: {
        flexDirection: 'column',
        marginHorizontal: 10,
      },
    
      qtyContainer: {},
    
      img: {
        width: 50,
        height: 50,
        borderRadius: 100,
      },
    
      rightIcon: {
        width: 10,
        height: 10,
        borderRadius: 100,
        tintColor: Colors.primary,
      },
    
      qtyTxt: {
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fontSize: 20,
        color: Colors.primary,
      },
    
      headerTxt: {
        color: '#777',
        marginHorizontal: 20,
        marginVertical: 20,
        fontWeight: 'normal',
      },
      poNum: {
        fontSize: 15,
        fontStyle: 'normal',
        letterSpacing: 1,
        color: 'tomato',
        fontWeight: 'bold',
      },
      poTxt: {
        fontSize: 13,
        color: '#777',
        marginVertical:5
      },
      poContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'space-around',
        alignItems:'center',
      },
      poCard: {
        width: 100,
        height: 80,
        paddingHorizontal:5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal:5,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    
        elevation: 8,
      },
})