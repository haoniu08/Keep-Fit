import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Header from './components/Header';
import StartScreen from './screens/StartScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

  const appName = "The Guessing Game";

  const [currentScreen, setCurrentScreen] = useState('start');

  // handle registration
  const handleRegister = (userInfo) => {
    setCurrentScreen('confirm');
  };

  // navigate between screens
  const navigateScreen = (screen) => {
    switch (screen) {
      case 'start':
        return <StartScreen onRegister={handleRegister} />;
      case 'confirm':
        return <ConfirmScreen />;
      case 'game':
        return <GameScreen />;
    }
  }

  return (

    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topSection}>
        <Header name={appName} />
      </View>

      <View style={styles.mainArea}>
        {navigateScreen(currentScreen)}
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
    width: '100%',
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
