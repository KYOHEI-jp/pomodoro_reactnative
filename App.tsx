import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const FOCUS_TIME_MINTUTES = 0.2 * 60 * 1000;
const BREAK_TIME_MINUTES = 0.1 * 60 + 1000;

export default function App() {
  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINTUTES);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null);

  const startTimer = () => {
    const id = setInterval(() => setTimerCount((prev) => prev - 1000), 1000);
    setTimerInterval(id);
  };

  const stopTimer = () => {
    if (timerInterval !== null) {
      clearInterval(timerInterval);
    }
  };

  const timerDate = new Date(timerCount);

  return (
    <View style={styles.container}>
      <Text>ぽもドーろ！</Text>
      <StatusBar style="auto" />
      <View style={styles.startButton}>
        <Button title="Start timer" onPress={startTimer} />
      </View>
      <View style={styles.stopButton}></View>
      <Button title="Stop timer" color="#FF0000" onPress={stopTimer} />
      <Text>
        {timerDate.getMinutes()}: {timerDate.getSeconds()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButton: {
    marginVertical: 20,
    width: 200,
    backgroundColor: 'yellow',
  },
  stopButton: {
    marginVertical: 20,
    width: 200,
    backgroundColor: 'red',
  },
});
