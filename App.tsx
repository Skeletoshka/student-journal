import React, {useState} from 'react';
import {SafeAreaView,ImageBackground,StyleSheet,Text,useColorScheme,View,Dimensions,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from './src/components/AuthNavigator'
import MainNavigator from './src/components/MainNavigator'

import {Colors} from 'react-native/Libraries/NewAppScreen';
import useAuth from './src/hooks/useAuth';

const image = require('./public/img/background.jpg');
const RootStack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const auth = useAuth();
  const { width, height } = Dimensions.get("window");

  const styles = StyleSheet.create({
    backgroundStyle: {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    },
    mainScreen: {
      height: '100%',
    },
    form:{
      marginTop: (height / 3),
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: 'white',
      borderWidth: 1,
      padding: 10,
      borderRadius: 10
    },
    formHeader: {
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold'
    }
  });

  return(
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Auth'>
        {/* Если пользователь не авторизован */}
        <RootStack.Screen name='Auth' component={AuthNavigator} options={{headerShown: false}}/>
        {/* Если пользователь авторизован */}
        <RootStack.Screen name='Main' component={MainNavigator} options={{headerShown: false}}/>
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App;
