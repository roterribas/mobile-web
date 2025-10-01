import { Text, View, StyleSheet, FlatList } from "react-native";


export default function ListarCursos() {
  const data = ["React Native", "Mongo DB", "Express", "Node.js", "C#"]
  return (
    <View style={estilos.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={estilos.lastItem}>
              <Text style={estilos.bullet}>° </Text>
              <Text style={estilos.text}>{item}</Text>
            </View>
            
          )}
        />
    </View>
  )
}

const estilos = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 20,
    },
    lastItem: {
      flexDirection: "row",
      allignItens: "center",
      marginBottom: 8,
      padding: 12,
      backgroundColor: "#FFA500",
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 10,
      elevation: 3,
    },
    bullet: {
      fontSize: 20,
      marginRight: 8,
    }, 
    text: {
      fontSize: 16,
    }
})