import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HorizontalLine = () => {
  return (
    <View style={styles.horizontalLine} />
  )
}

export default HorizontalLine

const styles = StyleSheet.create({
    horizontalLine: {
        borderBottomColor: '#A9A9A9', // Change the color to your desired color
        borderBottomWidth: 1,        // Change the width to your desired width
        marginRight:20,
        marginTop:20
      },
})