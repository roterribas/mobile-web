import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <View style={estilos.topo}>
      <Text style={estilos.tituloHeader}>Rodrigo Popeto</Text>
    </View>
    
    <View>
      <Text>Popeto</Text>
    </View>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    hight: 150,
    backgroundColor: "blue",
  },
  tituloHeader: {
    width: "100%",
    color: "white",
    textAlign: "center",
    paddingTop: 60,
    fontSize: 20
  }
});
