import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../utils/Colors';
import SupplierTransactionDetails from './SupplierTransactionDetails';

const SupplierInfoDash = () => {
  const [editInfoClicked, setEditInfoClicked] = useState(false);
  const manageEditInfoBtnClick = () => {
    setEditInfoClicked(!editInfoClicked);
    //add method to update supplier data
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.viewFlex}>
        <View style={styles.flexSideContainer}>
          <Text style={styles.label}>Supplier name</Text>
          <TextInput style={styles.input} keyboardType="ascii-capable" />
        </View>
        <View style={styles.flexSideContainer}>
          <Text style={styles.label}>Phone</Text>
          <TextInput style={styles.input} keyboardType="ascii-capable" />
        </View>
      </View>
      <View style={styles.viewFlex}>
        <View style={styles.flexSideContainer}>
          <Text style={styles.label}>Supplier Id</Text>
          <TextInput style={styles.input} keyboardType="ascii-capable" />
        </View>
        <View style={styles.flexSideContainer}>
          <Text style={styles.label}>Category</Text>
          <TextInput style={styles.input} keyboardType="ascii-capable" />
        </View>
      </View>
      <View style={styles.editBtn}>
        <Button
          title={!editInfoClicked ? 'Edit Info' : 'Save Info'}
          width={'100%'}
          borderRadius={10}
          onPress={manageEditInfoBtnClick}
          color={Colors.primary}
        />
      </View>
      <Text style={styles.label}>Transaction details</Text>
      <View style={styles.mainContainerTx}>
        <View style={styles.dataContainerTx}>
          <Text style={styles.headerTxTxt}>Date</Text>
          <Text style={styles.headerTxTxt}>Items</Text>
          <Text style={styles.headerTxTxt}>Amount</Text>
          <Text style={styles.headerTxTxt}>Status</Text>
          <Text style={styles.headerTxTxt}></Text>
        </View>
      </View>
      <SupplierTransactionDetails />
    </View>
  );
};

export default SupplierInfoDash;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#DCDCDC',
  },
  editBtn: {
    marginVertical: 20,
  },
  label: {
    marginVertical: 10,
    color: 'black',
  },
  mainContainer: {
    marginHorizontal: 20,
  },
  viewFlex: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  flexSideContainer: {
    width: '45%',
  },
  mainContainerTx: {
    height: 50,
    width: '100%',
    borderTopWidth: 1,
    borderColor: Colors.lightGrey,
  },
  dataContainerTx: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerTxTxt: {
    fontWeight: 'bold',
    color: Colors.black,
  },
});
