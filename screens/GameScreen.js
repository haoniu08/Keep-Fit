import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Alert, TextInput } from 'react-native';
import { generateTarget, checkGuess, checkGameOver } from '../utils/gameLogic';
import Card from '../components/Card';
import Button from '../components/Button';

export default function GameScreen( {phoneNum, onRestart} ) {

    const [gameState, setGameState] = useState("initial");
    const [targetNum, setTargetNum] = useState(null);
    const [guess, setGuess] = useState("");
    const [attempts, setAttempts] = useState(4);
    const [timer, setTimer] = useState(60);
    const [gameOverReason, setGameOverReason] = useState("");
    const lastDigit = phoneNum % 10;

    function startGame() {
        setGameState("playing");
        setTargetNum(generateTarget(phoneNum));
        setAttempts(4);
        setTimer(60);
    }

    // timer
    useEffect(() => {
        if (gameState === "playing" && timer > 0) {
            const countdown = setTimeout(() => setTimer(prev => prev - 1), 1000);
            return () => clearTimeout(countdown);
        } else if (timer === 0) {
            setGameOverReason("You are out of time");
            setGameState("gameOver");
        }     
    }, {timer, gameState});



    return (
        <Card>
          {
            gameState === "initial" && (
            <>
                <Text>You have 60 seconds and 4 attempts to guess a number that is 
                    a multiply of {lastDigit} between 1 and 100.
                </Text>
                <Button styles={styles.buttonContainer} title={"Start"} onPress={startGame}></Button>
            </>
            )
          }

          {
            gameState === "playing" &&  (
            <>
              <Text>Guess a number between 1 & 100 that is a multiple of {lastDigit}</Text>
              <TextInput
                value={guess}
                onChangeText={setGuess}
                keyboardType="number-pad"
                style={styles.input}
              > 
              </TextInput>
              <Text>Attempts left: {attempts}</Text>
              <Text>Time left: {timer}</Text>
              <Button title="Use a hint" />
              <Button title="Submit" /> 
            </>   
          )}
        </Card>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
});
