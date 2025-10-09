import {StyleSheet, Text, View} from 'react-native'

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
        height: 120,
        backgroundColor: "#d7d7de",
        borderBottomColor: "#9c9ca1ff",
        borderBottomWidth: 3,
    },
    tituloHeader: {
        width: "100%",
        textAlign: 'center',
        color: "#ff7b00ff",
        fontWeight: "bold",
        fontSize: 25,
        paddingTop: 40,
    }
})