import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Button from '../components/Button';

export default function ConfirmScreen({ isVisible, userInfo, onGoBack, onContinue }) {
  return (
    <View>
      <Modal visible={isVisible} transparent>
        <View style={styles.centeredView}>
          <Card>
            <Text style={styles.text}>Hello {userInfo.name}</Text>
            <Text style={styles.text}>Here is the information you entered:</Text>
            <Text style={styles.text}>{userInfo.email}</Text>
            <Text style={styles.text}>{userInfo.phoneNum}</Text>
            <Text style={styles.text}>If it is not correct, please go back and edit then</Text>
            <Button title="Go back" onPress={onGoBack} />
            <Button title="Continue" onPress={onContinue}/>
          </Card> 
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});