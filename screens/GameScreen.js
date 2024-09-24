import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { generateTarget, checkGuess, checkGameOver } from '../utils/gameLogic';
import Card from '../components/Card';
import Button from '../components/Button';

export default function GameScreen( phoneNum, onRestart) {

    const [gameState, setGameState] = useState("initial");
    const [targetNum, setTargetNum] = useState(null);
    const [guess, setGuess] = useState("");
    const [attempts, setAttempts] = useState(4);
    const [timer, setTimer] = useState(60);

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
