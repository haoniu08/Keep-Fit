import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styling from '../utils/StyleUtil.js';
import color from '../utils/ColorUtil.js';

const Button = ({ 
    onPress, 
    title, 
    disabled, 
    customStyle,
    textStyle,
    disabledTextStyle, 
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.button, 
                customStyle,
                disabled ? styles.disabled : {}
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={[
                styles.buttonText,
                textStyle,
                disabled ? disabledTextStyle : {}
                ]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: styling.smallPadding,
        margin: styling.smallMargin,
        borderRadius: styling.smallBorderRadius,
    },
    buttonText: {
        color: color.black,
        fontSize: styling.mediumFontSize,
        textAlign: styling.centerPosition,
    },
    disabled: {
        backgroundColor: color.gray,
    },
});

export default Button;