import { StyleSheet, Text, View, } from 'react-native'

export default function ListaPessoas() {
    const pessoas = [
        {
            id: 1,
            nome:"Juliana",
            idade: 20,
        },
        {
            id: 2,
            nome:"Caio",
            idade: 40,
        },
        {
            id: 30,
            nome:"Edu",
            idade: 18,
        },
        {
            id: 15,
            nome:"Gabs",
            idade: 58,
        }
    ]
  return (
    <View style={estilos.ontainer}>
        <Text style={estilos.titulo}>Lista Pessoas</Text>
    
    {pessoas.map((pessoa)=> (
        <View style={estilos.card}>
            <Text>{pessoa.nome}</Text>
            <Text>{pessoa.idade}</Text>
        </View>
    ))}
    </View>
  )
}

const estilos = StyleSheet.create({
    ontainer: {
        padding: 20,
        marginTop: 40,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    card: {
        backgroundColor: "#fff",
        padding: 15,
        borderColor:"#dedada",
        borderWidth: 1,
        marginBottom:10,
    }
})
