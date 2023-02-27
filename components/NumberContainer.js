import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../utils/colors';

export default function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 24,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: Colors.primary,
        borderRadius: 8,
    },
    text: {
        fontSize: 24,
        color: Colors.primary,
        fontWeight: 'bold',
    },
});
