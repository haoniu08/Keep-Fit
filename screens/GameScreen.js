import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Alert, TextInput, View } from 'react-native';
import { generateTarget, checkGuess } from '../utils/GameLogic.js';
import CustomText from '../components/CustomText.js';
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
            if (attempts === 4) {
                setAttempts(3);
            }
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
                <Button textStyle={styles.restartButton} title="Restart" onPress={onRestart} />
            </View>
            <Card style={styles.gameInfo}>
            {
                gameState === "initial" && (
                <>
                    <CustomText style={styles.text}>You have 60 seconds and 4 attempts to guess a number that is 
                        a multiply of {lastDigit} between 1 and 100.
                    </CustomText>
                    <Button textStyle={styles.buttonText} title={"Start"} onPress={startGame}></Button>
                </>
                )
            }

            {
                gameState === "playing" &&  (
                <>
                <CustomText style={styles.text}>Guess a number between 1 & 100 that is a multiple of {lastDigit}</CustomText>
                <TextInput
                    value={guess}
                    onChangeText={setGuess}
                    keyboardType="number-pad"
                    style={styles.input}
                > 
                </TextInput>
                <CustomText style={styles.promptText}>{hint}</CustomText>
                <CustomText style={styles.promptText}>Attempts left: {attempts}</CustomText>
                <CustomText style={styles.promptText}>Time left: {timer}</CustomText>
                <Button 
                    title="Use a hint" 
                    onPress={handleUseHint} 
                    disabled={hintUsed}
                    textStyle={styles.buttonText}
                    disabledTextStyle={{ color: color.gray }}  // Disabled text color
/>
                <Button title="Submit" onPress={handleSubmit} textStyle={{color: color.blue}}/> 
                </>   
            )}
            {
                gameState === "gameOver" && (
                    <>
                        <CustomText style={styles.text}>The game is Over!</CustomText>
                        <CustomText style={styles.text}>{gameOverReason}</CustomText>
                        <Button textStyle={styles.buttonText} title={"New Game"} onPress={restartGame} /> 
                    </>
                )
            }
                {
                    gameState === "win" && (
                        <>
                            <CustomText style={styles.text}>Congratulations! You have guessed the number!</CustomText>
                            <CustomText style={styles.text}>Attempts used: { 4 - attempts }</CustomText>
                            <Button textStyle={styles.buttonText} title="New Game" onPress={restartGame} /> 
                        </>
                    )
                }
                {
                    gameState === "wrong" && (
                        <>
                            <CustomText style={styles.text}>You did not guess correct!</CustomText> 
                            <CustomText style={styles.text}>{wrongGuess}</CustomText>
                            <Button textStyle={styles.buttonText} title="Try again" onPress={() => setGameState("playing")} /> 
                            <Button textStyle={styles.buttonText} title="End the game" onPress={() => setGameState("gameOver")} />    
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
        width: styling.fullWidth,
        flex: 1,
        justifyContent: styling.centerPosition,
        alignItems: styling.centerPosition,
    },
    restartButtonContainer: {
        width: styling.fullWidth,
        flexDirection: styling.rowDirection,
        justifyContent: styling.rightFlexAlign,
        paddingRight: styling.largePadding,
        padding: 5,
    },
    restartButton: {
        padding: styling.mediumPadding,
        color: color.white,
        fontWeight: styling.boldFont,
        borderRadius: styling.mediumBorderRadius,
    },
    gameInfo: {
        flexShrink: 1,
        justifyContent: styling.centerPosition,
    },
    disabledText: {
        color: color.gray,
    },
    buttonText: {
        color: color.blue,
    },
    text: {
        textAlign: styling.centerPosition,
        padding: styling.smallPaddin6g,
        color: color.purple,
    },
    promptText: {
        fontSize: styling.smallFontSize,
        textAlign: styling.centerPosition,  
        color: color.gray,
    },
});
