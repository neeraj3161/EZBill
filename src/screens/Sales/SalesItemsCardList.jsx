import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import dd from '../../data';
import {FlashList} from '@shopify/flash-list';

const SalesItemsCardList = ({text}) => {
  const [data, setData] = useState([{}, {}]);

 
  //getData on first render

  useEffect(() => {
    getData();

   
  }, []);


  useEffect(() => {
    const lowercasedSearchTerm = text.toLowerCase();

    const filteredData = dd.filter((data) =>
      data.name.toLowerCase().includes(lowercasedSearchTerm)
    );

    setData(filteredData);
   
  }, [text]);

  //getDummyData

  const getData = () => {
    setData(dd);
    console.log(`data length: ${data.length}`);
  };

  //manage each click

  const manageItemClick = (index) => {
    setData(oldData => {
      var newArr = [...oldData];
      newArr[index].qty += 1;
      return newArr;
    });
  };

  //render
  const renderItem = useCallback(
    ({item, index}) => {
      return(
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => manageItemClick(index)}>
        <View style={[styles.itemCard]}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../../assets/Images/salon.jpeg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.detailsContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.amntTxtContainer}>
                <Text style={styles.infoTxt}>x{item.qty}</Text>
              </View>
              <View style={styles.amntTxtContainer}>
                <Text style={styles.infoTxt}>{item.price}</Text>
              </View>
            </View>
            <View style={styles.itemNameContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      )
    },
    [data],
  );

  const keyExtractor = useCallback((item, index) => `${item.id}`, []);

  return (
    <SafeAreaView style={{marginBottom:400}}>
      <View style={{height: '100%'}}>
        <FlashList
          data={data}
          estimatedItemSize={250}
          numColumns={3}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default SalesItemsCardList;

const styles = StyleSheet.create({
  itemListMainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  itemCard: {
    width: 100,
    height: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    margin: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#D0D4CA',
    overflow: 'hidden',
  },

  imgContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '40%',
    overflow: 'hidden',
  },

  detailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemName: {
    color: '#000000',
    padding: 8,
    paddingBottom: 0,
  },
  amntTxtContainer: {
    height: 20,
    width: 40,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoTxt: {
    fontSize: 14,
    color: '#8D8D8D',
  },
  itemNameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
