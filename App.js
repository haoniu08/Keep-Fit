import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Header from './components/Header';
import StartScreen from './screens/StartScreen';

export default function App() {

  const appName = "The Guessing Game";

  const [currentScreen, setCurrentScreen] = useState('start');

  const navigateScreen = (screen) => {
    switch (currentScreen) {
      case 'start':
        return <StartScreen />;
      default:
        return <StartScreen />;
    }
  }

  return (

    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topSection}>
        <Header name={appName} />
      </View>

      <View style={styles.mainArea}>
        {navigateScreen(currentScreen)}
      <StatusBar style="auto" />
    </View>
    </ SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  topSection: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainArea: {
    flex: 5,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
