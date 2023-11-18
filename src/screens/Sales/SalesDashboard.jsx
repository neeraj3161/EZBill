import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import SalesItemsCardList from './SalesItemsCardList';
import SalesBottom from './SalesBottom';

const SalesDashboard = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <>
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.salesDashContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Quick Search item"
          keyboardType="ascii-capable"
          inlineImageLeft="search.png"
        />
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/sort.png')}
            style={styles.sortImg}
          />
        </TouchableOpacity>
      </View>

      <SalesItemsCardList text={text} />
      
    </View>
    <View style={{position: 'absolute', bottom: 120, width:'100%'}}>
        <SalesBottom/>
      </View>
    </>
  );
};

export default SalesDashboard;

const styles = StyleSheet.create({
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
    paddingLeft: 15,
    flexGrow: 2,
    borderRadius: 8,
    borderColor: '#D0D4CA',
  },
});
