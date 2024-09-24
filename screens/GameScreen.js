// a basis for the game screen

import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Button from '../components/Button';

export default function GameScreen() {
    return (
        <View>
        <Card>
            <Text style={styles.text}>Welcome to the Guessing Game</Text>
            <Text style={styles.text}>You have 10 chances to guess the number</Text>
            <Text style={styles.text}>between 1 and 100</Text>
            <Text style={styles.text}>Good luck!</Text>
        </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
});
