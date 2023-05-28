import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const FOCUS_TIME_MINTUTES = 0.2 * 60 * 1000;
const BREAK_TIME_MINUTES = 0.1 * 60 + 1000;


export default function App() {
  const [timerCount, setTimerCount] = useState<number>(12)
  return (
    <View style={styles.container}>
      <Text>ぽもドーろ！</Text>
      <StatusBar style="auto" />
      <Button title="Start timer" onPress={() => console.log("start timer")}/>
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
});
