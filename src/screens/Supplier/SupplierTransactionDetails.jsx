import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useCallback} from 'react';
import {FlashList} from '@shopify/flash-list';
import Colors from '../../utils/Colors';

const data = [
  {
    txId: 1,
    date: '02/03/2023',
    itemsCount: 5,
    amount: 235689,
  },
  {
    txId: 2,
    date: '02/03/2023',
    itemsCount: 5,
    amount: 235689,
  },
  {
    txId: 3,
    date: '02/03/2023',
    itemsCount: 5,
    amount: 235689,
  },
  {
    txId: 4,
    date: '02/03/2023',
    itemsCount: 5,
    amount: 235689,
  },
  {
    txId: 5,
    date: '02/03/2023',
    itemsCount: 5,
    amount: 235689,
  },
  {
    txId: 6,
    date: '02/03/2023',
    itemsCount: 5,
    amount: 235689,
  },
  {
    txId: 7,
    date: '02/03/2023',
    itemsCount: 5,
    amount: 235689,
  },
  {
    txId: 8,
    date: '02/03/2023',
    itemsCount: 5,
    amount: 235689,
  },
  {
    txId: 9,
    date: '02/03/2023',
    itemsCount: 5,
    amount: 235689,
  },
  {
    txId: 10,
    date: '02/03/2023',
    itemsCount: 5,
    amount: 235689,
  },
];

const SupplierTransactionDetails = () => {
  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.dataContainer}>
            <Text>{item.date}</Text>
            <Text>{item.itemsCount}</Text>
            <Text>{item.amount}</Text>
            <Text>{item.amount}</Text>
            {/* this should be status */}
            <TouchableOpacity
            // onPress={() => {
            //   //navigation.replace('Supplier');
            // }}
            >
              <Image
                style={styles.right_arrow}
                source={require('../../assets/icons/right-arrow.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    },
    [data],
  );

  const keyExtractor = useCallback((item, index) => `${item.txId}`, []);
  return (
    <SafeAreaView style={{marginBottom: 500}}>
      <View style={{height: '70%', paddingBottom: 50}}>
        <FlashList
          data={data}
          estimatedItemSize={100}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default SupplierTransactionDetails;

const styles = StyleSheet.create({
  mainContainer: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: Colors.primary_light,
  },
  dataContainer: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  right_arrow: {
    tintColor: Colors.lightGrey,
  },
});
