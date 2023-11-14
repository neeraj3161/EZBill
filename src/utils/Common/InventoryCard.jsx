import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image, Pressable} from 'react-native';

const InventoryCard = ({ color,backgroundColor,borderLeftColor,name,description,qty,iconName }) => {
    const cardStyles = {
       color
      };

      const mainContainer = {
        backgroundColor,
        borderLeftColor
      }

    
      return (
        <Pressable>
        <View style={[mainContainer,styles.mainContainer]}>
        <Image
          source={require('../../assets/icons/no-stock.png')}
          style={styles.img}
        />
        <View style={styles.txtContainer}>
          <Text style={[styles.txt,cardStyles]}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        <View style={styles.qtyContainer}>
          <Text style={[cardStyles,styles.qtyTxt]}>{qty}</Text>
        </View>

        <Image
          source={require('../../assets/icons/right-arrow.png')}
          style={styles.rightIcon}
        />
      </View>
      </Pressable>
      );
    };
    
    const styles = StyleSheet.create({
      txt: {
        fontSize: 15,
        letterSpacing: 1,
        marginBottom: 5,
      },
      description: {
        color: '#777',
        fontSize: 13,
      },
    
      mainContainer: {
        height: 70,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        borderLeftWidth:5,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    
        elevation: 8,
        justifyContent:'space-around'
      },
    
      txtContainer: {
        flexDirection: 'column',
        marginHorizontal: 10,
      },
    
      qtyContainer:{
    
      },
    
      img:{
        width: 40, height: 40,padding:10
      },
    
      rightIcon:{
        width: 20, height: 20, borderRadius: 100, tintColor:'#525FE1'
      },
    
      qtyTxt:{
        fontWeight:'bold',
        fontFamily:'sans-serif',
        fontSize:30,
        padding:5
      }
    });

export default InventoryCard;
