import { NativeBaseProvider } from "native-base";
import React from "react"
import { StyleSheet, Text, View, PanResponder } from 'react-native';
import {StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Matches from "./dashboard_screens/matches";
import Settings from "./dashboard_screens/settings";


const Tab = createBottomTabNavigator();

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (evt, gestureState) => {
                console.log('hi')
              if (gestureState.dx < -50) {
                console.log('Left swipe detected!');
              }
            },
            onPanResponderRelease: () => {
              // Reset any necessary states or perform additional actions
            },
          });
    }


    render() {
        return (
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name = "Matches" component={Matches} />
                <Tab.Screen name = "Settings" component={Settings}/>
            </Tab.Navigator>
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

export default Dashboard;