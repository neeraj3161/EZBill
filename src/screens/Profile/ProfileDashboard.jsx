import { StyleSheet, Text, View, TextInput, TouchableOpacity,Button,ScrollView } from 'react-native'
import React,{useRef} from 'react'
import SelectDropdown from 'react-native-select-dropdown'


const ProfileDashboard = () => {
    const countries = ["Restaurant", "Salon", "Cake Shop","Clear Selection"]
    const dropdownRef = useRef({}); 
    const reset=()=>{ dropdownRef.current.reset() };
    const changeColor = ()=>{dropdownRef.current.color = 'red'}

  return (
    <ScrollView style={{marginBottom:100}}>



        <View style={styles.mainContainer}>
        <Text style={styles.label}>Category</Text>
        <SelectDropdown
	data={countries}
    ref={dropdownRef} 
    search={true}
    dropdownIconPosition='right'
    buttonStyle={[styles.input,{width:'100%',height:50}]}
    buttonTextStyle={{fontSize:15}}
    defaultButtonText='Select business category'
    dropdownStyle={{width:300,borderRadius:10,backgroundColor:'white'}}
    rowTextStyle={{color:'#4c4c4c',fontSize:15}}
    searchPlaceHolder='Search category name'
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
        if(index === 3)
        {

            changeColor();
        }

	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		if(index === 3)
        {

            reset();
        }
        return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>
        <Text style={styles.label}>Business name</Text>
       <TextInput
        style={styles.input}
        keyboardType="ascii-capable"
      />
      <Text style={styles.label}>ESTD Year</Text>
       <TextInput
        style={styles.input}
        keyboardType="numeric"
      />

<Text style={styles.label}>Owner name</Text>
       <TextInput
        style={styles.input}
        keyboardType="ascii-capable"
      />


<Text style={styles.label}>Phone number</Text>
       <TextInput
        style={styles.input}
        keyboardType="phone-pad"
      />


<Text style={styles.label}>Business Location</Text>
       <TextInput
        style={[styles.input,styles.addressInput]}
        keyboardType="ascii-capable"
        multiline={true}
      />
      <View>
        <TouchableOpacity>
            <Text style={styles.locateMeTxt}>Locate Me</Text>
        </TouchableOpacity></View>

        <Text style={styles.label}>GSTIN</Text>
       <TextInput
        style={styles.input}
        keyboardType="number-pad"
      />

<TouchableOpacity style={styles.label}>
    <Button color={'#525FE1'} title='Save'/>
</TouchableOpacity>
    </View>

    </ScrollView>


  )
}

export default ProfileDashboard

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