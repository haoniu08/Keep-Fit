import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import Card from '../components/Card';

export default function StartScreen() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  // error states
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumError, setPhoneNumError] = useState('');

  // input validation
  function validateName (text) {
    if (!/^[a-zA-Z ]+$/.test(text) || text.length < 2) {
      setNameError('Name must be at least 2 characters long non-numeric');
    } else {
      setNameError('');
    }
    setName(text);
  }

  function validateEmail (text) {
    if (!/^\S+@\S+\.\S+$/.test(text)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
    setEmail(text);
  }

  function validatePhoneNum (text) {
    if (
      text.length !== 10 
      || isNaN(text) 
      || text.charAt(text.length - 1) === '0' 
      || text.charAt(text.length - 1) === '1') {
        setPhoneNumError('Invalid phone number');
      } else {
        setPhoneNumError('');
      }
    setPhoneNum(text);
  }

  // reset button
  function handleReset () {
    setName('');
    setEmail('');
    setPhoneNum('');
    setIsChecked(false);
    setNameError('');
    setEmailError('');
    setPhoneNumError('');
  }

  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        {/* Name Input */}
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Please enter your name"
          onChangeText={validateName}
          value={name}
        />
        {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

        {/* Email Input */}
        <Text style={styles.label}>Email address</Text>
        <TextInput
          style={styles.input}
          placeholder="Please enter your email"
          onChangeText={validateEmail}
          value={email}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        {/* Phone Number Input */}
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Please Enter your phone number"
          onChangeText={validatePhoneNum}
          value={phoneNum}
        />
        {phoneNumError ? <Text style={styles.errorText}>{phoneNumError}</Text> : null}

        {/* Checkbox */}
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isChecked}
            onValueChange={setIsChecked}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>I am not a robot</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.registerButton,
              { backgroundColor: isChecked ? '#0000FF' : '#ccc' }
            ]}
            disabled={!isChecked}
          >
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </Card>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resetButton: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
  },
  resetButtonText: {
    color: '#fff',
  },
  registerButton: {
    padding: 10,
    borderRadius: 5,
  },
  registerButtonText: {
    color: '#fff',
  },
});