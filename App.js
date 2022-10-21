import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import RootNav from './src/navigation/nav';

export default function App() {
  return (
    <NavigationContainer>
      <RootNav />

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
