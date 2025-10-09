import React from 'react'
import {StyleSheet, Text, View} from 'rect-react'

export default function Header() {
  return (
    <View style={estilos.topo}>
        <Text style={estilos.tituloHeader} >FUT Popeto</Text>
    </View>
  )
}

const estilos = StyleSheet.create ({
    topo: {
        width: "100%",
        heigth: 120,
        backgroundColor: "#d7d7de",
    },
    tituloHeader: {
        width: "100%",
        textAlign: 'center',
        color: "#ff7b00ff",
        fontWeight: "bold",
        fontSize: 25,
        paddingTop: 40
    },
})