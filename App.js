import { StyleSheet, View, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Header from './components/Header';
import StartScreen from './screens/StartScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

  const appName = "The Guessing Game";

  const [currentScreen, setCurrentScreen] = useState('start');
  const [userInfo, setUserInfo] = useState({});
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  // handle registration
  const handleRegister = (userInfo) => {
    setUserInfo(userInfo);
    setIsConfirmVisible(true);
  };

  const handleGoBack = () => {
    setIsConfirmVisible(false);
    setCurrentScreen('start');
  };

  const handleContinue = () => {
    setIsConfirmVisible(false);
    setCurrentScreen('game');
  }


  // navigate between screens
  const navigateScreen = (screen) => {
    switch (screen) {
      case 'start':
        return <StartScreen onRegister={handleRegister} userInfo={userInfo}/>;
      case 'game':
        return <GameScreen />;
      default:
        return <StartScreen onRegister={handleRegister} userInfo={userInfo}/>;
    }
  }

  return (

    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topSection}>
        <Header name={appName} />
      </View>

      <View style={styles.mainArea}>
        {navigateScreen(currentScreen)}
        <ConfirmScreen 
          isVisible={isConfirmVisible} 
          userInfo={userInfo}
          onGoBack={handleGoBack}
          onContinue={handleContinue}
        />
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
