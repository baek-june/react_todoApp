import React from 'react';
import {StyleSheet} from 'react-native';
import DateHead from './components/DateHead';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  const today = new Date();

  return (
    <SafeAreaProvider>
      <DateHead date={today} />
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({});
export default App;
