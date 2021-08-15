/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Home, SME, Mainline, News, Offers, Detail } from "./screens";
import { createStackNavigator, } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme,  } from '@react-navigation/native';
// import {   } from 'react-native-shared-element';
import Tabs from "./navigation/tabs";

const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
      <>     
        <NavigationContainer theme={theme}>
          <Stack.Navigator
              screenOptions={{
                  headerShown: false,
              }}
              initialRouteName={'Home'}
          >
            {/* Tabs */}
            <Stack.Screen name="Tabs" component={Tabs}/>          
            <Stack.Screen 
              name="Detail" 
              component={Detail}
              
            />              
          </Stack.Navigator>
        </NavigationContainer>    
      </>
  )
}

export default App;

