import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';


class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    //this._bootstrapAsync();
  }

  // Fetch the token from Global.storage then navigate to our appropriate place
  componentDidMount() {
    
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });


export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    // App: TabNavigator_Staff,
    // Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
