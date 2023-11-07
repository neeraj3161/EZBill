import React from 'react';
import { View, StyleSheet ,Text} from 'react-native';

const CardView = ({ borderLeftColor,text,color,amountTxt }) => {
    const cardStyles = {
        width: 150,
        height: 70,
        backgroundColor: '#fff',
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        borderRadius: 10,
        marginTop: 20,
        marginRight: 20,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 2,
        borderLeftColor, // Use the prop value here
      };

      const amountStyles = 
      {
        color,
        fontWeight:'500'
      }
    
      return (
        <View style={[styles.card, cardStyles]}>
          <Text style={styles.cardTxt}>{text}</Text>
          <Text style={[amountStyles]}>{amountTxt}</Text>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      card: {
        // Additional styles that are common to all cards
      },
      cardTxt : {
        fontSize:15,
        fontWeight:'400',
        marginBottom:5
    },
    });

export default CardView;
