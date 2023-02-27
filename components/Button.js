import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Button({ children, onPress }) {
    return (
        <View style={styles.container}>
            <Pressable
                android_ripple={{ color: 'green' }}
                style={styles.innerContainer}
                onPress={onPress}
            >
                <Text style={styles.btnContainer}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 4,
        overflow: 'hidden',
        borderRadius: 28,
    },
    btnContainer: {
        color: '#fff',
        textAlign: 'center',
    },
    innerContainer: {
        elevation: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#72063c',
    },
});
