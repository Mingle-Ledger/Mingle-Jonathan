import { NativeBaseProvider } from "native-base";
import React from "react"
import { StyleSheet, Text, View, PanResponder } from 'react-native';

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
            <NativeBaseProvider>
                <View style={styles.container} {...this.panResponder.panHandlers}>
                    <Text>This is the dashboard</Text>
                </View>
            </NativeBaseProvider>
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