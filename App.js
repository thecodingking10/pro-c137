import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './screens/home';
import DetailsScreen from './screens/details';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer style={{backgroundColor:"#062C43"}}/>
    </View>
  );
}

const AppStackNavigator = createStackNavigator(
  {
    Home:{
      screen: HomeScreen,
      navigationOptions:{
        headerShown: false
      }
    },
    Details:{
      screen: DetailsScreen,
    }
  },
  {
    initialRoute: "Home",
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: '#091E36' },
    },
  }
);

const AppContainer = createAppContainer(AppStackNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#091E36',
    alignItems: "stretch",
    justifyContent: 'center',
  },
});
