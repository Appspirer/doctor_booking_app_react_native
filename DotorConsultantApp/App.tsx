import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppStack from './src/navigations/StackNavigator';
import Images from './src/themes/Images';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppStack />
    </View>
  )
}
