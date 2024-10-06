import { StyleSheet, View } from "react-native";

export default function Card({ children, style }) {
    return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
    card: {
        width: '85%',
        height: 'auto',
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#black',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 5, // For Android shadow
        padding: 20,
        marginVertical: 10,
    },
});