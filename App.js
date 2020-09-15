import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthScreen } from './src/screens/auth';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <StatusBar style="auto" />
    <Stack.Navigator>
      <Stack.Screen name="Authentication" component={AuthScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
)

