import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import Transactions from '../Dashboard/Transactions';
import SalesReport from './SalesReport';
import DashCharts from './DashCharts';
import TransactionDetailsScreen from './TransactionDetailsScreen';

const Dashboard = () => {
  console.log('This should not print repeat');
  const [privateMode, setPrivateMode] = useState(false);
  return (
    <ScrollView>
      {/* {showMenu && 
            <View style={styles.card}>
              <TouchableOpacity>
                <Text style={styles.menuTxt}>Profile</Text>
                </TouchableOpacity>
              <TouchableOpacity ><Text style={styles.menuTxt}>Settings</Text></TouchableOpacity>
              <TouchableOpacity ><Text style={styles.menuTxt}>About</Text></TouchableOpacity>
              <TouchableOpacity ><Text style={styles.menuTxt}>Contact Us</Text></TouchableOpacity>
            </View>} */}
      <TransactionDetailsScreen
        privateMode={privateMode}
        setPrivateMode={setPrivateMode}
      />
      {privateMode && (
        <>
          <Transactions />
          <SalesReport />
          <DashCharts />
        </>
      )}
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 200,
    backgroundColor: '#fff',
    position: 'absolute',
    right: 0,
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    //elevation only works for android
    elevation: 5,
    justifyContent: 'center',
    borderRadius: 10,
    zIndex: 10,
  },
  menuTxt: {
    color: '#000',
    padding: 12,
  },
});
