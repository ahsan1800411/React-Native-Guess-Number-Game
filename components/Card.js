import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Card({ children }) {
    return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3b021f',
        elevation: 8,
        marginTop: 10,
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 10,
    },
});
