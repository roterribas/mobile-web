import { Button, Text, View, StyleSheet } from 'react-native'


export default function Card(props) {
    
  return (
    <View style={estilos.container}>
        <Text style={estilos.cardTitle}>{props.title}</Text>
        <Text style={estilos.cardContet}>{props.content}</Text>
        <Button title={props.textButton} onPress={props.OnPress} />
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
