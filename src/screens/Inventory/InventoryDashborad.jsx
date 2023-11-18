import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import InventoryCard from '../../utils/Common/InventoryCard';

const InventoryDashborad = () => {
  const data = [
    {
      id: 1,
      name: 'Low stock items',
      qty: 20,
      description: 'Items should be reordered!!',
      iconName: 'analytics.png',
    },
    {
      id: 2,
      name: 'Stock Out',
      qty: 10,
      description: 'Stocked out items!!',
      iconName: 'no-stock.png',
    },
    {
      id: 3,
      name: 'High Demand High stock',
      qty: 2,
      description: 'High demands this month',
      iconName: 'high-value.png',
    },
    {
      id: 4,
      name: 'Total Inventory Stock',
      qty: 1350,
      description: 'Total  items',
      iconName: 'high-value.png',
    },
    {
      id: 5,
      name: 'Low demand High Stock',
      qty: 139,
      description: 'Low demand high stocks',
      iconName: 'high-value.png',
    },
    {
      id: 6,
      name: 'High demand Low Stock',
      qty: 201,
      description: 'High demand Low stocks',
      iconName: 'high-value.png',
    },

    ,
    {
      id: 6,
      name: 'High Stock',
      qty: 201,
      description: 'High stock items',
      iconName: 'high-value.png',
    },
  ];

  const stockOut = require('../../assets/icons/InventoryIcons/out_stock.png');
  const highValueImg = require('../../assets/icons/InventoryIcons/high_profit.png');
  const lowStock = require('../../assets/icons/InventoryIcons/low_stock.png');
  const totalItems = require('../../assets/icons/InventoryIcons/total_stock.png')

  return (
    <View>
      <View style={styles.btnContainer}>
        <TouchableOpacity>
          <Button
            title="Add item"
            touchSoundDisabled={false}
            color={'#525FE1'}
            tintColor={'white'}
          />
        </TouchableOpacity>
      </View>
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.headerTxt}>Actuals</Text>
          {/* //HDHS */}
          <InventoryCard
            color={'#4c4c4c'}
            backgroundColor={'white'}
            borderLeftColor={'green'}
            name={data[2].name}
            description={data[2].description}
            qty={data[2].qty}
            imageSource={highValueImg}
          />
          {/* //HDLS */}
          {/* <InventoryCard color={'#ff3232'}  backgroundColor={'#f8f8f8'} borderLeftColor={'#ff3232'} name={data[5].name} description={data[5].description} qty={data[5].qty} imageSource={img1}/> */}

          {/* //LS */}
          <InventoryCard
            color={'#4c4c4c'}
            backgroundColor={'white'}
            borderLeftColor={'#190482'}
            name={data[0].name}
            description={data[0].description}
            qty={data[0].qty}
            imageSource={lowStock}
          />

          {/* //SO */}
          <InventoryCard
            color={'tomato'}
            backgroundColor={'white'}
            borderLeftColor={'#BE3144'}
            name={data[1].name}
            description={data[1].description}
            qty={data[1].qty}
            imageSource={stockOut}
          />

          {/* //LDHS */}
          {/* <InventoryCard color={'#7f7f00'}  backgroundColor={'#f8f8f8'} borderLeftColor={'#7f7f00'} name={data[4].name} description={data[4].description} qty={data[4].qty} imageSource={img1}/> */}

          {/* //LDHS */}
          <InventoryCard
            color={'#4c4c4c'}
            backgroundColor={'white'}
            borderLeftColor={'#070707'}
            name={data[3].name}
            description={data[3].description}
            qty={data[3].qty}
            imageSource={totalItems}
          />
          <Text style={styles.headerTxt}>Purchase orders</Text>

          <View style={styles.poContainer}>
            <View style={styles.poCard}>
              <Text style={styles.poNum}>22</Text>
              <Text style={styles.poTxt}>Auto Generated</Text>
            </View>

            <View style={styles.poCard}>
              <Text style={styles.poNum}>5</Text>
              <Text style={styles.poTxt}>Completed</Text>
            </View>

            <View style={styles.poCard}>
              <Text style={styles.poNum}>9</Text>
              <Text style={styles.poTxt}>Issued</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default InventoryDashborad;

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
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
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
    width: 20,
    height: 20,
    borderRadius: 100,
    tintColor: '#525FE1',
  },

  qtyTxt: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fontSize: 30,
    color: '#E9B824',
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
});
