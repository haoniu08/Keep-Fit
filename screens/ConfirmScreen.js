import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../utils/ColorUtil.js';
import Card from '../components/Card';
import Button from '../components/Button';


export default function ConfirmScreen({ isVisible, userInfo, onGoBack, onContinue }) {
  return (
    <View>
      <Modal visible={isVisible} transparent>
      <LinearGradient
          colors={[
            colors.backgroundGradientStart, 
            colors.backgroundGradientMiddle, 
            colors.backgroundGradientEnd]}
          style={styles.gradientBackground}
        >
          <View style={styles.centeredView}>
            <Card>
              <Text style={styles.text}>Hello {userInfo.name}</Text>
              <Text style={styles.text}>Here is the information you entered:</Text>
              <Text style={styles.text}>{userInfo.email}</Text>
              <Text style={styles.text}>{userInfo.phoneNum}</Text>
              <Text style={styles.text}>If it is not correct, please go back and edit then</Text>
              <View style={styles.buttonContainer}>
                <Button title="Go back" onPress={onGoBack} customStyle={styles.goBackButton}/>
                <Button title="Continue" onPress={onContinue} customStyle={styles.continueButton}/>
              </View>
            </Card> 
          </View>
        </LinearGradient>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  goBackButton: {
    backgroundColor: '#ff0000', // Red
    flex: 1,
    marginRight: 10,
    padding: 10,
    alignItems: 'center',
  },
  continueButton: {
    backgroundColor: '#0000FF', // Blue
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
});