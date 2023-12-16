import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Alert,
  Pressable,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import Colors from '../../utils/Colors';

const VisualReportsDash = () => {
  const data = {
    labels: ['Swim', 'Bike', 'Run'], // optional
    data: [0.4, 0.6, 0.8],
  };

  const [dataPointPosition, setDataPointPosition] = useState([0, 0]);
  const [xText, setXText] = useState([0, 0]);
  const [yText, setYText] = useState(['', '']);
  const handleDataPointClick = useCallback(data => {
    console.log(data.value);
    setDataPointPosition([data.x - 20, data.y + 10]);
    setXText(data.value);
  }, []);

  const resetValues = useCallback(() => {
    setDataPointPosition([0, 0]);
    setXText('');
  });

  function nFormatter(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, ''); //+ 'G';
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, ''); //+ 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, ''); //+ 'K';
    }
    return num;
  }
  const date = new Date();
  return (
    <Pressable onPress={resetValues}>
      <Text style={styles.headingTxt}>Visual Reports</Text>
      <Text style={styles.label}>Sales Report {date.getFullYear()}</Text>

      <LineChart
        data={{
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec',
          ],
          datasets: [
            {
              data: [2, 3, 4, 5, 6, 4, 7, 8, 9, 5, 6],
            },
          ],
        }}
        decorator={useCallback(() => {
          return (
            <>
              {dataPointPosition[0] != 0 && dataPointPosition[1] != 0 && (
                <View
                  style={{
                    height: 30,
                    minWidth: 40,
                    borderRadius: 10,
                    backgroundColor: Colors.white,
                    position: 'absolute',
                    left: dataPointPosition[0],
                    top: dataPointPosition[1],
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                  }}>
                  <Text
                    style={{
                      paddingHorizontal: 5,
                      fontSize: 13,
                      color: Colors.primary,
                    }}>
                    {xText}
                  </Text>
                </View>
              )}
            </>
          );
        })}
        width={Dimensions.get('window').width - 20} // from react-native
        height={240}
        yAxisLabel="Rs "
        //   yLabelsOffset={-10}
        //   xLabelsOffset={10}
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#525FE1',
          backgroundGradientFrom: '#435585',
          backgroundGradientTo: '#525FE1',
          // decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: Colors.yellow,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        onDataPointClick={handleDataPointClick}
      />
      <Text style={styles.label}>
        Moving Average Sales 6M -{date.getFullYear()}
      </Text>
      <Text style={styles.label}>4Weeks</Text>
      <>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row
            data={['Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']}
            style={styles.head}
          />
          <Rows
            data={[
              ['123.6', '222', '333', '4995.6', '333', '4995.6'],
              ['123.6', '222', '333', '4995.6', '333', '4995.6'],
              ['123.6', '222', '333', '4995.6', '333', '4995.6'],
              ['123.6', '222', '333', '4995.6', '333', '4995.6'],
            ]}
            textStyle={styles.text}
          />
        </Table>
        <Text style={styles.label}>Month Total</Text>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Rows
            data={[['123.6', '222', '333', '4995.6', '333', '4995.6']]}
            textStyle={styles.text}
          />
        </Table>
      </>
      {/* customer report */}
      <Text style={styles.label}>Customer Report {date.getFullYear()}</Text>

      <BarChart
        data={{
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec',
          ],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43],
            },
          ],
        }}
        yAxisInterval={1}
        width={Dimensions.get('window').width - 20}
        height={240}
        chartConfig={{
          decimalPlaces: 0,
          backgroundColor: '#525FE1',
          backgroundGradientFrom: '#435585',
          backgroundGradientTo: '#525FE1',
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          strokeWidth: 1, // optional, default 3
          barPercentage: 0.3,
          useShadowColorFromDataset: false, // optional
        }}
        bezier
        style={{
          paddingRight: 10,
          marginVertical: 8,
          borderRadius: 16,
        }}
        showBarTops={true}
        showValuesOnTopOfBars={true}
      />
    </Pressable>
  );
};

export default VisualReportsDash;

const styles = StyleSheet.create({
  headingTxt: {
    fontSize: 15,
    marginVertical: 10,
  },
  label: {
    marginVertical: 10,
  },

  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
});
