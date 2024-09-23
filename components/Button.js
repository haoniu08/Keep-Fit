import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, title, disabled }) => {
    return (
        <TouchableOpacity
            style={[styles.button, disabled ? styles.disabled : {}]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    disabled: {
        backgroundColor: 'gray',
    },
});

export default Button;