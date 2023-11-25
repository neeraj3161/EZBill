import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import HorizontalLine from '../../utils/Common/HorizontalLine';
import Colors from '../../utils/Colors';

const DashCharts = () => {
    
      const data = {
        labels: ["Swim", "Bike", "Run"], // optional
        data: [0.4, 0.6, 0.8]
      };
  return (
    <View style={{marginBottom:200, marginLeft:20, marginRight:20}}>
 <Text style={styles.heading}>Visual Report <Text style={styles.txtSmall}>(Last 6 Months)</Text></Text>
 <HorizontalLine/>
  <LineChart
    data={{
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width-40} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#525FE1",
      backgroundGradientFrom: "#435585",
      backgroundGradientTo: "#525FE1",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />

<ProgressChart
  data={data}
  width={Dimensions.get("window").width-40}
  height={220}
  strokeWidth={16}
  radius={32}
  chartConfig={{
    backgroundColor: "#525FE1",
    backgroundGradientFrom: "#435585",
    backgroundGradientTo: "#525FE1",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  }}
  hideLegend={false}
/>

</View>
  )
}

export default DashCharts

const styles = StyleSheet.create({

    heading:{
        marginTop:10,
        marginBottom:0,
        fontSize:20,
        color:Colors.primary,
        
        fontFamily:'sans'
    
    },

    txtSmall:{
        marginLeft:10,
        fontSize:15,
        fontWeight:'500',
        color:'#39A7FF',
    }
})