import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import Colors from '../Colors';
import {useNavigation} from '@react-navigation/native';

const StaffListCard = () => {
  const navigation = useNavigation();
  return (
    // Add logic for how long the name and surname should be shown in UI or add ... if its too big
    <View style={styles.staffListCardMain}>
      <Pressable
        onPress={() => {
          navigation.navigate('StaffInfo');
        }}>
        <View style={styles.staffListCard}>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
              width: '90%',
            }}>
            <Image
              style={styles.staffListCardProfile}
              source={require('../../assets/icons/profile.png')}
            />
            <Text style={styles.staffListCardNameTxt}>Aman Choudhary</Text>
            <View style={styles.status}></View>
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

      <Pressable>
        <View style={styles.staffListCard}>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
              width: '90%',
            }}>
            <Image
              style={styles.staffListCardProfile}
              source={require('../../assets/icons/profile.png')}
            />
            <Text style={styles.staffListCardNameTxt}>Aman Choudhary</Text>
            <View style={styles.status}></View>
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

      <Pressable>
        <View style={styles.staffListCard}>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
              width: '90%',
            }}>
            <Image
              style={styles.staffListCardProfile}
              source={require('../../assets/icons/profile.png')}
            />
            <Text style={styles.staffListCardNameTxt}>Aman Chosdsdsudhary</Text>
            <View style={styles.status}></View>
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
};

export default StaffListCard;

const styles = StyleSheet.create({
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
    marginVertical: 20,
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
