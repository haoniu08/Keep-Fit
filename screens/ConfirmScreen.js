import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Button from '../components/Button';

export default function ConfirmScreen({ isVisible, userInfo}) {
  return (
    <View>
      <Modal visible={isVisible} transparent>
        <View style={styles.centeredView}>
          <Card>
            <Text>Hello {userInfo.name}</Text>
            <Text>Here is the information you entered:</Text>
            <Text>{userInfo.email}</Text>
            <Text>{userInfo.phoneNum}</Text>
            <Text>If it is not correct, please go back and edit then</Text>

            <Button title="Go back" onPress={() => setVisible(false)} />
            <Button title="Continue" />
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