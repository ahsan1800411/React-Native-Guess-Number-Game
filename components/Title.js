import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { Colors } from '../utils/colors';


export default function Title({ children }) {
    return <Text style={styles.container}>{children}</Text>;
}

const styles = StyleSheet.create({
    container: {
        color: '#fff',
        borderWidth: 2,
        borderColor: '#fff',
        padding: 12,
        fontSize: 24,
        fontWeigh: 'bold',
        textAlign: 'center'
    },
});
