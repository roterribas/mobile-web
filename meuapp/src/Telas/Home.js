import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Card from "../Components/Card"

export default function Home() {
  const navigation = useNavigation;
  return (
    <View>
        <Card 
          title="Sobre"
          content="Saiba mais sobre nós e nossos serviços"
          textButton="Ir para sobre"
          OnPress={() => navigation.navigate('Sobre')}
        />
        <Card 
          title="Faq"
          content="Tire suas duvidas"
          textButton="Ir para FAQ"
          OnPress={() => navigation.navigate('Faq')}
        />
    </View>
  )
}
