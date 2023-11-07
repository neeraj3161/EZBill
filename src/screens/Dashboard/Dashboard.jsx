import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Transactions from '../Dashboard/Transactions'
import SalesReport from './SalesReport'
import DashCharts from './DashCharts'
import TransactionDetailsScreen from './TransactionDetailsScreen'

const Dashboard = () => {
  return (
    <ScrollView >
      

      <TransactionDetailsScreen/>
      <Transactions/>
      <SalesReport/>
      <DashCharts/>
      
    </ScrollView>
    )
}

export default Dashboard

const styles = StyleSheet.create({})