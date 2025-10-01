import { Text, View, StyleSheet, FlatList } from "react-native";


export default function ListarCursos() {
  return (
    <View style={estuilos.container}>
        <FlatList
          data={["React Native", "Node.js", "MongoDB", "HTML Popeto"]}
          renderItem={({ item }) => <Text>°{item}</Text>}
        />
    </View>
  )
}

const estuilos = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 20,
    }
})