import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  Image,
  Pressable,
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
        <Text style={styles.label}>Customer Handled</Text>
        <View style={[styles.rowContainer, {justifyContent: 'flex-start'}]}>
          <View style={styles.skrinkedContainer}>
            <Text
              style={[
                styles.label,
                {
                  marginRight: 20,
                },
              ]}>
              Overall
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  marginRight: 10,
                  width: 100,
                },
              ]}
              keyboardType="number-pad"
              value="100"
            />
          </View>
          <View style={styles.customersHandeledCurrentMonthContainer}>
            <Text
              style={[
                styles.label,
                {
                  marginRight: 10,
                  width: 100,
                },
              ]}>
              Monthly
            </Text>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              value="00"
            />
          </View>
        </View>
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
        <View style={styles.rowContainer}>
          <View>
            <Text
              style={[
                styles.label,
                {
                  marginRight: 20,
                },
              ]}>
              Verification Proof
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  marginRight: 10,
                },
              ]}
              keyboardType="number-pad"
              value="PAN"
              editable={false}
            />
          </View>
          <View style={styles.verifyNoContainer}>
            <Text style={styles.label}>Verification no</Text>
            <TextInput
              style={styles.input}
              value="BAUPT2969N"
              selectTextOnFocus={false}
              editable={false}
            />
          </View>
        </View>
        <TouchableOpacity
          style={[
            styles.input,
            {flexDirection: 'row', marginTop: 20, justifyContent: 'center'},
          ]}>
          {/* <Image
            source={require('../../../assets/icons/upload.png')}
            style={{ width: 20, height: 20, tintColor: '#777' }}
          /> */}
          <Text>View documents</Text>
        </TouchableOpacity>
        <View style={styles.rowContainer}>
          <View>
            <Text
              style={[
                styles.label,
                {
                  marginRight: 20,
                },
              ]}>
              Staff Location
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  marginRight: 10,
                },
              ]}
              keyboardType="number-pad"
              value="Pimpri"
              editable={false}
            />
          </View>
          <View style={styles.verifyNoContainer}>
            <Text style={styles.label}>Transfer Staff</Text>
            <TextInput
              style={styles.input}
              value="BAUPT2969N"
              selectTextOnFocus={false}
              editable={false}
            />
          </View>
        </View>
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
  },
  revokeAccessBtn: {
    width: 120,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.danger,
    borderRadius: 10,
  },
  manageAttendanceBtn: {
    width: 120,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  mainBtnTxt: {
    color: Colors.white,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  verifyNoContainer: {
    flexGrow: 2,
  },
  customersHandeledCurrentMonthContainer: {},
  skrinkedContainer: {},
});
