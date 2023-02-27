import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScrenn from './screens/GameScrenn';
import { Colors } from './utils/colors';
import EndGameScreen from './screens/EndGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);

  function handleScreens(number) {
    setUserNumber(number);
    setIsGameOver(false);
  }

  function gameOver() {
    setIsGameOver(true);
  }

  let screen = <StartGameScreen pickNumber={handleScreens} />;

  // if (userNumber) {
  //   screen = <GameScrenn userNumber={userNumber} gameOver={gameOver} />;
  // }
  if (userNumber) {
    screen = <EndGameScreen />;
  }
  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={[Colors.primary, '#4e0329']}
    >
      <ImageBackground
        source={require('./assets/images/dices.jpg')}
        resizeMode='cover'
        style={styles.rootContainer}
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
