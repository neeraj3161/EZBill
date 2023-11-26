import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  Image,
  Pressable
} from 'react-native';
import React from 'react';
import Colors from '../../../utils/Colors';

const StaffInfo = () => {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.imgContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              borderWidth: 1,
              borderColor: '#d7d7d7',
              width: 90,
              height: 90,
              borderRadius: 120,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Image
              style={styles.profileImg}
              source={require('../../../assets/icons/profile.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.locateMeTxt}>Profile photo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainBtnContainer}>
          <Pressable>
            <View style={styles.revokeAccessBtn}>
              <Text style={styles.mainBtnTxt}>Revoke App Access</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.manageAttendanceBtn}>
              <Text style={styles.mainBtnTxt}>Manage Attendance</Text>
            </View>
          </Pressable>
        </View>

        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} keyboardType="ascii-capable" />

        <Text style={styles.label}>Joining Date</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="dd-mm-yyyy"
        />
        <Text style={styles.label}>DOB</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="dd-mm-yyyy"
        />
      </View>
    </ScrollView>
  );
};

export default StaffInfo;

const styles = StyleSheet.create({
  profileImg: {
    borderRadius: 100,
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    tintColor: '#d7d7d7',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  locateMeTxt: {
    color: '#525FE1',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#DCDCDC',
  },
  label: {
    marginVertical: 10,
    color: 'black',
  },
  mainContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  mainBtnContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
  },
  revokeAccessBtn: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.danger,
    borderRadius: 10,
  },
  manageAttendanceBtn: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  mainBtnTxt: {
    color: Colors.white,
  },
});