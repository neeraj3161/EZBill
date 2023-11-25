import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import StaffListCard from '../../../utils/Common/StaffListCard';

const AllStaffDash = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.mainContainer}>
        <View style={styles.topNavBar}>
          <TouchableOpacity
            onPress={() => {
              navigation.replace('ManageStaff');
            }}>
            <Image
              style={{margin: 20, tintColor: '#fff'}}
              source={require('../../../assets/icons/arrow_back.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.brandNameTxt}>Staff List</Text>
          </View>
          <View style={styles.icons}></View>
        </View>
        <View style={styles.salesDashContainer}>
          <View style={styles.searchContainer}>
            <Image
              style={{
                position: 'absolute',
                tintColor: '#777',
                width: 20,
                height: 20,
                left: 10,
              }}
              source={require('../../../assets/icons/search.png')}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Quick Search item"
              keyboardType="ascii-capable"
              inlineImageLeft="search.png"
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/icons/sort.png')}
              style={styles.sortImg}
            />
          </TouchableOpacity>
        </View>
      </View>
      <StaffListCard />
    </View>
  );
};

export default AllStaffDash;

const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: 'center',
    flexGrow: 2,
  },
  dashTxt: {
    color: '#525FE1',
    padding: 10,
    fontWeight: '400',
  },

  sortImg: {
    tintColor: '#525FE1',
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },

  salesDashContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 35,
    borderRadius: 8,
    borderColor: '#D0D4CA',
  },
  mainContainer: {
    color: '#000',
  },
  topNavBar: {
    height: 60,
    backgroundColor: '#525FE1',
    alignItems: 'center',
    flexDirection: 'row',

    width: '100%',
  },

  brandNameTxt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 10,
  },

  icons: {
    flexDirection: 'row',
  },
});
