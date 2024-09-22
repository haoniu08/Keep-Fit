import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';

export default function StartScreen() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        {/* Name Input */}
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Please enter your name"
          onChangeText={text => setName(text)}
          value={name}
        />

        {/* Email Input */}
        <Text style={styles.label}>Email address</Text>
        <TextInput
          style={styles.input}
          placeholder="Please enter your email"
          onChangeText={text => setEmail(text)}
          value={email}
        />

        {/* Phone Number Input */}
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Please Enter your phone number"
          onChangeText={text => setPhoneNum(text)}
          value={phoneNum}
        />

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
          <TouchableOpacity style={styles.resetButton}>
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
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});