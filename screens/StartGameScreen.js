import { Alert, StyleSheet, TextInput, View, Text } from 'react-native';
import React, { useState } from 'react';
import Button from '../components/Button';
import Title from '../components/Title';
import { Colors } from '../utils/colors';
import Card from '../components/Card';

export default function StartGameScreen({ pickNumber }) {
    const [eneteredNumber, setEneteredNumber] = useState('');

    function handleChange(text) {
        setEneteredNumber(text);
    }

    function handlePress() {
        const choosenNumber = parseInt(eneteredNumber);
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert(
                'Invalid number',
                'Please enter a valid number between 0 and 99',
                [
                    {
                        style: 'destructive',
                        text: 'Ok',
                        onPress: () => setEneteredNumber(''),
                    },
                ]
            );
            return;
        }
        pickNumber(eneteredNumber);
    }
    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <Text style={styles.textInstruction}>Enter a Number</Text>
                <TextInput
                    style={styles.inputContainer}
                    keyboardType='number-pad'
                    maxLength={2}
                    value={eneteredNumber}
                    onChangeText={handleChange}
                />
                <View style={styles.btnContainer}>
                    <Button onPress={() => setEneteredNumber('')}>Reset</Button>
                    <Button onPress={handlePress}>Confirm</Button>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },

    inputContainer: {
        height: 50,
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomColor: '#dd2',
        borderBottomWidth: 2,
        color: '#dd2',
        width: 50,
        marginBottom: 8,
        textAlign: 'center',
    },
    btnContainer: {
        flexDirection: 'row',
    },
    textInstruction: {
        color: Colors.primary,
        fontSize: 23,
    },
});
