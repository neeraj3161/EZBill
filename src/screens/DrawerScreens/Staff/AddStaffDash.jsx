import { StyleSheet, Text, View, TextInput, TouchableOpacity,Button,ScrollView,Image } from 'react-native'

import React, { useMemo, useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

const AddStaffDash = () => {
    const date = new Date();
    console.log(date)
    const [selectedId, setSelectedId] = useState(1);

    console.log(selectedId);

    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Adhaar',
            value: '1',
            
            size:20,
            color:'#777',
            borderColor:'#777'
        },
        {
            id: '2',
            label: 'PAN',
            value: '2',
            
            size:20,
            color:'#777',
            borderColor:'#777'
        },
        {
            id: '3',
            label: 'DL',
            value: '3',
            
            size:20,
            color:'#777',
            borderColor:'#777'
        }
    ]), []);


  return (
    <ScrollView style={{marginBottom:100}}>

<Text>Add option for profile picture</Text>
    <View style={styles.mainContainer}>
    <Text style={styles.label}>Name</Text>
       <TextInput
        style={styles.input}
        keyboardType="ascii-capable"
      />
      <Text style={styles.label}>Ph no</Text>
       <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder='10-digit mobile number'
      />

<Text style={styles.label}>Alt Phone number</Text>
       <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder='Alternate ph no'
      />

<Text style={styles.label}>Date of joining (DOJ)</Text>
       <TextInput
        style={styles.input}
        keyboardType="number-pad"
        placeholder='dd-mm-yyyy'
      />
<Text style={styles.label}>Govt verification Id type</Text>
<RadioGroup 
            layout='row'
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
        />

<Text style={styles.label}>Govt verification number</Text>
       <TextInput
        style={styles.input}
        keyboardType="name-phone-pad"
      />

    <TouchableOpacity
        style={[styles.input,{flexDirection:'row',marginTop:20,justifyContent:'center'}]}
        
      >
        <Image source={require('../../../assets/icons/upload.png')} style={{width:20,height:20,tintColor:'#777'}}/>
        <Text>Upload documents</Text>
      </TouchableOpacity>


<Text style={styles.label}>Address</Text>
       <TextInput
        style={[styles.input,styles.addressInput]}
        keyboardType="ascii-capable"
        multiline={true}
      />
      <View>
        <TouchableOpacity>
            <Text style={styles.locateMeTxt}>Auto read</Text>
        </TouchableOpacity>
        
</View>
        {/* <Text style={styles.label}>GSTIN</Text>
       <TextInput
        style={styles.input}
        keyboardType="number-pad"
      /> */}

<TouchableOpacity style={styles.label}>
    <Button color={'#525FE1'} title='Save'/>
</TouchableOpacity>
    </View>

    </ScrollView>
  )
}

export default AddStaffDash

const styles = StyleSheet.create({
    locateMeTxt:{
        color:'#525FE1'
    },
    addressInput:{
        height:100
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        borderColor:'#DCDCDC'
      },

      mainContainer:{
        marginHorizontal:20,
        marginVertical:20
      },
      label:{
        marginVertical:10
      }
})