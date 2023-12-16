import {StyleSheet, Text, View, TouchableOpacity, Switch} from 'react-native';
import React, {useCallback, useState} from 'react';
import TouchableOpacityButton from '../../utils/Common/TouchableOpacityButton';

const TransactionDetailsScreen = ({privateMode, setPrivateMode}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = useCallback(() => {
    setIsEnabled(previousState => !previousState);
    setPrivateMode(privateMode => !privateMode);
  }, []);
  return (
    <View
      style={{
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacityButton
        color="#525FE1"
        width={200}
        text={'View Recent Transactions'}
        textColor="#fff"
      />
      <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.optionsTxt}> Private Mode</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#0C356A' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.optionsTxt}> Bluetooth Status: </Text>
          <Text style={{color: 'green'}}>Active</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.optionsTxt}> Internet Status: </Text>
          <Text style={{color: 'tomato'}}>In-Active</Text>
        </View>
      </View>
    </View>
  );
};

export default TransactionDetailsScreen;

const styles = StyleSheet.create({
  optionsTxt: {
    color: '#525FE1',
  },
});
