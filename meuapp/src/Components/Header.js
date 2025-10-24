import {StyleSheet, Text, View} from 'react-native'

export default function Header() {
  return (
    <View style={estilos.topo}>
        <Text style={estilos.tituloHeader} >RODRIGÃO</Text>
    </View>
  )
}

const estilos = StyleSheet.create ({
    topo: {
        width: "100%",
        height: 120,
        backgroundColor: "#131394ff",
        borderBottomColor: "#2d2d84ff",
        borderBottomWidth: 10,
    },
    tituloHeader: {
        width: "100%",
        textAlign: 'center',
        color: "#ff7b00ff",
        fontWeight: "bold",
        fontSize: 40,
        paddingTop: 50,
    }
})