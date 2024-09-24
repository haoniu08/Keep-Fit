import { Alert } from "react-native";

// function to generate multiples of a number
export const generateMultiple = (phoneNum) => {
    const lastDigit = phoneNum % 10;
    const multiples = [];
    for (let i = 1; i <= 100; i++) {
        if (i % lastDigit === 0) {
            multiples.push(i);
        }
    }
    return multiples;
}

// function to generate a random number
export const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * multiples.length);
    return multiples[randomNumber];
}

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
}
