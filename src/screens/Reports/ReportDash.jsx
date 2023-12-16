import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../utils/Colors';
import DatePicker from 'react-native-date-picker';
import VisualReportsDash from './VisualReportsDash';

const ReportDash = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startOpen, setStartOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);
  const [startDateTxt, setStartDateTxt] = useState('Start Date');
  const [endDateTxt, setEndDateTxt] = useState('End Date');

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.mainContainerReport}>
      <DatePicker
        modal
        mode="date"
        open={startOpen}
        date={startDate}
        theme="dark"
        title={'Select Start Date'}
        onConfirm={date => {
          setStartOpen(false);
          setStartDate(date);
          setStartDateTxt(date.toString());
        }}
        onCancel={() => {
          setStartOpen(false);
        }}
      />

      <DatePicker
        modal
        mode="date"
        open={endOpen}
        date={endDate}
        title={'Select End Date'}
        theme="dark"
        onConfirm={date => {
          setEndOpen(false);
          setEndDate(date);
          setEndDateTxt(date.toString());
        }}
        onCancel={() => {
          setEndOpen(false);
        }}
      />

      <Text style={styles.label}>Select a date range to generate report</Text>
      <View style={styles.datePickerContainer}>
        <TouchableOpacity
          style={[
            styles.input,
            {
              flexDirection: 'row',
              marginTop: 5,
              justifyContent: 'center',
              width: '45%',
              marginLeft: 10,
            },
          ]}
          onPress={() => setStartOpen(true)}>
          <Text>{startDateTxt}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.input,
            {
              flexDirection: 'row',
              marginTop: 5,
              justifyContent: 'center',
              width: '45%',
              marginRight: 10,
            },
          ]}
          onPress={() => setEndOpen(true)}>
          <Text>{endDateTxt}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.revokeAccessBtn}>
          <Image
            source={require('../../../src/assets/icons/pdf.png')}
            style={{width: 20, height: 20, tintColor: '#fff', marginRight: 10}}
          />
          <Text style={styles.mainBtnTxt}>Generate Report</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.revokeAccessBtn}>
          <Image
            source={require('../../../src/assets/icons/pdf.png')}
            style={{width: 20, height: 20, tintColor: '#fff', marginRight: 10}}
          />
          <Text style={styles.mainBtnTxt}>PDF format</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.revokeAccessBtn}>
          <Image
            source={require('../../../src/assets/icons/csv.png')}
            style={{width: 20, height: 20, tintColor: '#fff', marginRight: 10}}
          />
          <Text style={styles.mainBtnTxt}>CSV/XLS Format</Text>
        </TouchableOpacity>
      </View>

      <VisualReportsDash />
    </ScrollView>
  );
};

export default ReportDash;

const styles = StyleSheet.create({
  mainContainerReport: {
    marginVertical: 10,
    marginHorizontal: 10,
    marginBottom: 100,
  },
  label: {
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#DCDCDC',
  },

  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  revokeAccessBtn: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#435585',
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
  },

  mainBtnTxt: {
    color: Colors.white,
  },
});
