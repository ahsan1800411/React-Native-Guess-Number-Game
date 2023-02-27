import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';
import Button from '../components/Button';
import Card from '../components/Card';
import { Colors } from '../utils/colors';
import { Ionicons } from '@expo/vector-icons';

function generateRandomBetween(min, max, exclude) {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    if (randomNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;

export default function GameScrenn({ userNumber, gameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    function handleNextGuess(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'higher' && currentGuess > userNumber)
        ) {
            Alert.alert('Invalid Request', 'You know you are lying', [
                {
                    text: 'Sorry',
                    style: 'cancel',
                },
            ]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const randNum = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        setCurrentGuess(randNum);
    }
    useEffect(() => {
        if (currentGuess === userNumber) {
            gameOver();
            return;
        }
    }, [currentGuess, userNumber, gameOver]);
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <Text style={styles.textInstruction}> Higher or Lower</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Button onPress={handleNextGuess.bind(this, 'higher')}>
                        <Ionicons size={23} name='md-add' />
                    </Button>
                    <Button onPress={handleNextGuess.bind(this, 'lower')}>
                        <Ionicons size={23} name='md-remove' />
                    </Button>
                </View>
            </Card>
            <View></View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 28,
        flex: 1,
    },
    textInstruction: {
        color: Colors.primary,
        fontSize: 23,
    },
});
