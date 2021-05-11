import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createAppContainer} from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}><Text>Stack Navigator Example</Text></TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
}

class Detail extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Detail Page</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({

  Home: {screen:App}

});

const DetailStack = createStackNavigator({

  Detail: {screen:Detail}

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppNavigator = createBottomTabNavigator({

  Home:HomeStack,
  Detail:DetailStack

});

export default createAppContainer(AppNavigator)