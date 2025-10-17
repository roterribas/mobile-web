import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/Telas/Home';
import Sobre from './src/Telas/Sobre';
import Faq from './src/Telas/Faq';
import ListaContatos from './src/Telas/ListaContatos';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
           <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
           <Stack.Screen name="ListaContatos" component={ListaContatos} options={{ headerShown: false }} />
           <Stack.Screen name="Faq" component={Faq} options={{ headerShown: false }} />
           <Stack.Screen name="Sobre" component={Sobre} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}