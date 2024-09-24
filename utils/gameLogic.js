import { Alert } from "react-native";

// function to generate the target number
export const generateTarget = (phoneNum) => {
    const lastDigit = phoneNum % 10;
    const multiples = [];
    for (let i = 1; i <= 100; i++) {
        if (i % lastDigit === 0) {
            multiples.push(i);
        }
    }
    const randomNumber = Math.floor(Math.random() * multiples.length);
    return multiples[randomNumber];
};

// function to check the guess
export const checkGuess = (guess, number, phoneNum) => {
    const lastDigit = phoneNum % 10;
    if (
        isNaN(guess) 
        || guess < 1 
        || guess > 100
    ) {
        return Alert.alert('Invalid Input', `Number has to be a multiple of ${lastDigit} between 1 and 100`);
    } else if (guess < number) {
        return ' Guess is too low';
    } else if (guess > number) {
        return 'Guess is too high';
    } else {
        return 'Congratulations! You got it!';
    }
};

// function to check if the game is over
export const checkGameOver = (timer, attempts) => {
    return timer <= 0 || attempts <= 0;
};
