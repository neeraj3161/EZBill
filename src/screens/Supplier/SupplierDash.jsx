import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  SafeAreaView,
  Pressable,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import Colors from '../../utils/Colors';
var data = [
  {
    name: 'Amar Lokhande',
    category: 'Material',
    phone: '8888888888',
    supplierId: '1',
  },
  {
    name: 'Amar Lokhande',
    category: 'Material',
    phone: '8888888888',
    supplierId: '2',
  },
  {
    name: 'Amar Lokhande',
    category: 'Material',
    phone: '8888888888',
    supplierId: '3',
  },
  {
    name: 'Amar Lokhande',
    category: 'Material',
    phone: '8888888888',
    supplierId: '4',
  },
  {
    name: 'Amar Lokhande',
    category: 'Material',
    phone: '8888888888',
    supplierId: '5',
  },
  {
    name: 'Amar Lokhande',
    category: 'Material',
    phone: '8888888888',
    supplierId: '6',
  },
  {
    name: 'Amar Lokhande',
    category: 'Material',
    phone: '8888888888',
    supplierId: '7',
  },
  {
    name: 'Amar Lokhande',
    category: 'Material',
    phone: '8888888888',
    supplierId: '8',
  },
  {
    name: 'Amar Lokhande',
    category: 'Material',
    phone: '8888888888',
    supplierId: '9',
  },
  {
    name: 'Amar Lokhande',
    category: 'Material',
    phone: '8888888888',
    supplierId: '10',
  },
];

const SupplierDash = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');

  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <View style={styles.staffListCardMain}>
          <Pressable
            onPress={() => {
              navigation.navigate('SupplierInfo');
            }}>
            <View style={styles.staffListCard}>
              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '90%',
                }}>
                {/* <Image
                  style={styles.staffListCardProfile}
                  source={require('../../assets/icons/profile.png')}
                /> */}
                <Text style={styles.staffListCardNameTxt}>{item.name}</Text>
                <Text style={styles.staffListCardNameTxt}>{item.category}</Text>
                {/* <View style={styles.status}></View> */}
                <TouchableOpacity>
                  <Image
                    style={styles.callLogo}
                    source={require('../../assets/icons/call.png')}
                  />
                </TouchableOpacity>
              </View>

              <Image
                style={styles.right_arrow}
                source={require('../../assets/icons/right-arrow.png')}
              />
            </View>
          </Pressable>
        </View>
      );
    },
    [data],
  );

  const keyExtractor = useCallback((item, index) => `${item.supplierId}`, []);

  return (
    <>
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
            source={require('../../assets/icons/search.png')}
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
            source={require('../../assets/icons/sort.png')}
            style={styles.sortImg}
          />
        </TouchableOpacity>
      </View>
      <SafeAreaView style={{marginBottom: 250}}>
        <View style={{height: '100%'}}>
          <FlashList
            data={data}
            estimatedItemSize={250}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default SupplierDash;

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
  right_arrow: {
    tintColor: Colors.lightGrey,
  },
  callLogo: {
    tintColor: Colors.red,
  },

  status: {
    backgroundColor: Colors.mediumGreen,
    height: 15,
    width: 15,
    borderRadius: 100,
  },

  staffListCardNameTxt: {
    color: Colors.black,
    justifyContent: 'space-between',
  },
  staffListCardProfile: {
    tintColor: Colors.primary,
    height: 50,
    width: 50,
  },
  staffListCardMain: {
    marginVertical: 0,
  },
  staffListCard: {
    height: 70,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
