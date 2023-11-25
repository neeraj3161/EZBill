import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';

const StaffCard = ({
  color,
  backgroundColor,
  borderLeftColor,
  name,
  description,
  qty,
}) => {
  const cardStyles = {
    color,
  };

  const mainContainer = {
    backgroundColor,
    borderLeftColor,
  };

  return (
    <View style={[mainContainer, styles.mainContainer]}>
      {/* <Image
          source={imageSource}
          style={styles.img}
        /> */}
      <View style={styles.txtContainer}>
        <Text style={styles.txt}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View style={styles.qtyContainer}>
        <Text style={[cardStyles, styles.qtyTxt]}>{qty}</Text>
      </View>

      <Image
        source={require('../../assets/icons/right-arrow.png')}
        style={styles.rightIcon}
      />
    </View>
  );
};

export default StaffCard;

const styles = StyleSheet.create({
  txt: {
    fontSize: 15,
    letterSpacing: 1,
    marginBottom: 5,
    color: '#000',
  },
  description: {
    color: '#777',
    fontSize: 13,
  },

  mainContainer: {
    height: 70,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',

    borderLeftWidth: 2,
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
    width: 25,
    height: 25,
    marginHorizontal: 20,
  },

  rightIcon: {
    width: 10,
    height: 10,
    borderRadius: 100,
    tintColor: '#d7d7d7',
  },

  qtyTxt: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fontSize: 20,
    padding: 20,
  },
});
