import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Alert, TextInput, View } from 'react-native';
import { generateTarget, checkGuess } from '../utils/GameLogic.js';
import color from '../utils/ColorUtil.js';
import styling from '../utils/StyleUtil.js';
import Card from '../components/Card';
import Button from '../components/Button';

export default function GameScreen( {phoneNum, onRestart} ) {

    const [gameState, setGameState] = useState("initial");
    const [targetNum, setTargetNum] = useState(null);
    const [guess, setGuess] = useState("");
    const [attempts, setAttempts] = useState(4);
    const [timer, setTimer] = useState(60);
    const [wrongGuess, setWrongGuess] = useState("");
    const [gameOverReason, setGameOverReason] = useState("");
    // set up hint
    const [hint, setHint] = useState("");
    const [hintUsed, setHintUsed] = useState(false);
    const lastDigit = phoneNum % 10;

    function resetGameState() {
        setGuess("");
        setWrongGuess("");
        setGameOverReason("");
        setHint("");
        setHintUsed(false);
    }
    
    function startGame() {
        resetGameState();
        setGameState("playing");
        setTargetNum(generateTarget(phoneNum));
        setAttempts(4);
        setTimer(60);
    }
    
    function restartGame() {
        resetGameState();
        setGameState("initial");
    }

    // handle submit guess
    function handleSubmit() { 
        const result = checkGuess(parseInt(guess), targetNum, phoneNum);
    
        if (result.includes("Congratulations")) {
            setGameState("win");
        } else if (result.includes("Invalid")) {
            Alert.alert("Invalid input", `Number has to be a multiple of ${phoneNum % 10} between 1 and 100`);
        } else {
            setAttempts(prev => {
                const newAttempts = prev - 1;
                if (newAttempts <= 0) {
                    setGameOverReason("You are out of attempts");
                    setGameState("gameOver");
                } else {
                    if (result.includes("low")) {
                        setGameState("wrong");
                        setWrongGuess("You should guess higher");
                    } else if (result.includes("high")) {
                        setGameState("wrong");
                        setWrongGuess("You should guess lower");
                    }
                }
                return newAttempts;
            });
        }
    }

    function handleUseHint () {
        if (!hintUsed) {
            setHintUsed(true);
            if (targetNum <= 50) {
                setHint("The number is between 1 and 50");
            } else {
                setHint("The number is between 51 and 100");
            }
        }
    }

    // timer
    useEffect(() => {
        if (timer > 0) {
          const countdown = setTimeout(() => setTimer(prev => prev - 1), 1000);
          return () => clearTimeout(countdown);
        } else {
          setGameState("gameOver");
          setGameOverReason("You are out of time");
        }
      }, [timer]);
    


    return (
        <>
        <View style={styles.gameScreen}>
            <View style={styles.restartButtonContainer}>
                <Button styles={styles.restartButton} title="Restart" onPress={onRestart} />
            </View>
            <Card style={styles.gameInfo}>
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
                <Text>{hint}</Text>
                <Text>Attempts left: {attempts}</Text>
                <Text>Time left: {timer}</Text>
                <Button title="Use a hint" onPress={handleUseHint} disabled={hintUsed}/>
                <Button title="Submit" onPress={handleSubmit}/> 
                </>   
            )}
            {
                gameState === "gameOver" && (
                    <>
                        <Text>The game is Over!</Text>
                        <Text>{gameOverReason}</Text>
                        <Button styles={styles.promptButton} title={"New Game"} onPress={restartGame} /> 
                    </>
                )
            }
                {
                    gameState === "win" && (
                        <>
                            <Text>Congratulations! You have guessed the number!</Text>
                            <Button title="New Game" onPress={restartGame} /> 
                        </>
                    )
                }
                {
                    gameState === "wrong" && (
                        <>
                            <Text>You did not guess correct!</Text> 
                            <Text>{wrongGuess}</Text>
                            <Button title="Try again" onPress={() => setGameState("playing")} /> 
                            <Button title="End the game" onPress={() => setGameState("gameOver")} />    
                        </>
                    )
                }
            </Card>
        </View>
            
        </>
    );
}

const styles = StyleSheet.create({
    gameScreen: {
        width: '100%',
        flex: 1,
        justifyContent: styling.centerPosition,
        alignItems: styling.centerPosition,
    },
    restartButtonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 5,
    },
    gameInfo: {
        flexShrink: 1,
        justifyContent: 'center',
    },
    promptButton: {
        color: color.blue,
    },
});
