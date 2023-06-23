import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Launch from "./src/screens/launch"
import React from "react"
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './src/screens/dashboard';
import Register from './src/screens/register';

import ScreenTypes from './src/misc/screens';
import PhoneRegister from './src/screens/phone_register';

const Stack = createNativeStackNavigator()

class App extends React.Component {

  // TODO: If user has cred stored, then load those in

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name={ScreenTypes.Launch}
            component={Launch}
          />

          <Stack.Screen
            name={ScreenTypes.Dashboard}
            component={Dashboard}
          />

          <Stack.Screen
            name={ScreenTypes.Register}
            component={Register}
          />
          <Stack.Screen
            name={ScreenTypes.PhoneRegister}
            component={PhoneRegister}
          />

          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
