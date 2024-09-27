// GradientBackground.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import colors from '../config/colors';
import colors from '../utils/ColorUtil.js';

const GradientBackground = ({ children }) => {
  return (
    <LinearGradient
      colors={[
        colors.backgroundGradientStart, 
        colors.backgroundGradientMiddle, 
        colors.backgroundGradientEnd]}
      style={styles.background}
    >
      <View style={styles.container}>
        {children}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginBottom: 200,
  },
});

export default GradientBackground;