import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/Telas/Home';
import Sobre from './src/Telas/Sobre';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
        <StackActions.Navigator initialRouteName="Home">
            <Stack.Screen nome="Home" component={Home} option={{ headerShow: false}} />
            <Stack.Screen nome="Sobre" component={Sobre} />
        </StackActions.Navigator>
    </NavigationContainer>
  )
}
