import { Image, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Title from '../components/Title';
import { Colors } from '../utils/colors';
import Button from '../components/Button';

export default function EndGameScreen() {
    return (
        <View style={styles.container}>
            <Title>Game is Over</Title>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/images/success.jpg')}
                    style={{ width: '100%', height: '100%' }}
                />
            </View>
            <View>
                <Text style={{ marginBottom: 20 }}>
                    Your Phone needs <Text style={styles.highlight}>x</Text> rounds to
                    meet <Text style={styles.highlight}>y</Text>
                </Text>
                <Button>Start Game Again</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        borderWidth: 3,
        height: 300,
        width: 300,
        borderRadius: 200,
        margin: 36,
        overflow: 'hidden',
    },
    highlight: {
        color: Colors.primary,
        fontSize: 23,
        fontWeight: '400',
        padding: 4

    },
});
