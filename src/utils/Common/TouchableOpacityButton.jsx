import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TouchableOpacityButton = ({ color, width, text, textColor, onPress }) => {
  const buttonStyle = {
    backgroundColor: color || '#007AFF', // Default color is blue
    width: width || 150, // Default width is 150
  };

  const textStyle = {
    color: textColor || '#fff', // Default text color is white
  };

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TouchableOpacityButton;
