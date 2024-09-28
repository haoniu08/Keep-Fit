import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styling from '../utils/StyleUtil.js';
import colors from '../utils/ColorUtil.js';
import Card from '../components/Card';
import Button from '../components/Button';
import CustomText from '../components/CustomText.js';


export default function ConfirmScreen({ isVisible, userInfo, onGoBack, onContinue }) {
  return (
    <View>
      <Modal visible={isVisible} transparent>
      <LinearGradient
            colors={[
                colors.backgroundGradientStart, 
                colors.backgroundGradientMiddle, 
                colors.backgroundGradientEnd
            ]}
            style={styles.gradientBackground}
        >
            <View style={styles.centeredView}>
                <Card>
                    <CustomText style={styles.text}>Hello {userInfo.name}</CustomText>
                    <CustomText style={styles.text}>Here is the information you entered:</CustomText>
                    <CustomText style={styles.text}>{userInfo.email}</CustomText>
                    <CustomText style={styles.text}>{userInfo.phoneNum}</CustomText>
                    <CustomText style={styles.text}>If it is not correct, please go back and edit then</CustomText>
                    <View style={styles.buttonContainer}>
                        <Button title="Go back" onPress={onGoBack} textStyle={styles.goBackButton}/>
                        <Button title="Continue" onPress={onContinue} textStyle={styles.continueButton}/>
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
    justifyContent: styling.centerPosition,
    alignItems: styling.centerPosition,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  text: {
    color: colors.purple,
    fontSize: styling.mediumFontSize,
    marginBottom: styling.smallMargin,
  },
  buttonContainer: {
    flexDirection: styling.rowDirection,
    justifyContent: styling.spaceBetween,
    marginTop: styling.mediumMargin,
  },
  goBackButton: {
    color: colors.deepPink,
  },
  continueButton: {
    color: colors.blue,
  },
});