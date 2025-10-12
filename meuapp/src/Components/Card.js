import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View, StyleSheet } from 'react-native'


export default function Card() {
    const navigation = useNavigation;
  return (
    <View style={estilos.container}>
        <Text style={estilos.cardTitle}>Sobre</Text>
        <Text style={estilos.cardContet}>Saiba Mais Sobre Nos</Text>
        <Button title="Ir para sobre" onPress={() => navigation.navigate('Sobre')} />
    </View>
  )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: "#dc1313b1",
        borderRadius: 1.41,
        shadowColor: 'orange',
        padding: 20,
        shadowOpacity: 0.2,
        elevation: 2,
        margin: 20,
    },
    cardTitle: {
        fontSize: 18, 
        fontWeight: "bold",
        marginBottom: 10,
    },
    cardContet: {
        fontSize: 14,
        marginBottom: 10,
    }

    
});
