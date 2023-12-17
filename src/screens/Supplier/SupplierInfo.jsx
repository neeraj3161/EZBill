import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import SupplierInfoDash from './SupplierInfoDash';

const SupplierInfo = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topNavBar}>
        <TouchableOpacity
          onPress={() => {
            navigation.replace('Supplier');
          }}>
          <Image
            style={{margin: 20, tintColor: '#fff'}}
            source={require('../../assets/icons/arrow_back.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.brandNameTxt}>Supplier Info</Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Image
              style={{margin: 20, tintColor: '#fff'}}
              source={require('../../assets/icons/support.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <SupplierInfoDash />
    </View>
  );
};

export default SupplierInfo;

const styles = StyleSheet.create({
  mainContainer: {
    color: '#000',
    backgroundColor: '#f8f8f8',
  },
  topNavBar: {
    height: 60,
    backgroundColor: '#525FE1',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

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